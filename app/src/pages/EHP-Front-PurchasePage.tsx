import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { calculateTicketPrice } from '../utils/EHP-Back-pricing';
import StyledButton from '../components/EHP-Front-StyledButton';

type Ticket = {
  age: string;
  passType: string;
  isRetired: boolean;
}

export default function PurchasePage() {
  const navigate = useNavigate();
  const [date, setDate] = useState('');
  const [quantity, setQuantity] = useState(1);
  const [paymentMethod, setPaymentMethod] = useState('');
  const [dateError, setDateError] = useState<string | null>(null);
  const [ageErrors, setAgeErrors] = useState<string[]>(['']);
  const [tickets, setTickets] = useState<Ticket[]>([{ age: '', passType: 'REGULAR', isRetired: false }]);
  
  const handleQuantityChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const qty = parseInt(e.target.value);
    setQuantity(qty);
    setTickets(Array.from({ length: qty }, () => ({ age: '', passType: 'REGULAR', isRetired: false })));
    setAgeErrors(Array(qty).fill(''));
  };
  
  const handleAgeChange = (index: number, value: string) => {
    const newTickets = [...tickets];
    newTickets[index].age = value;
  
    const num = Number(value);
    newTickets[index].isRetired = !isNaN(num) && num >= 65;
  
    setTickets(newTickets);
  
    const updatedErrors = [...ageErrors];
    if (isNaN(num)) {
      updatedErrors[index] = 'Debe ingresar un número';
    } else if (num < 0) {
      updatedErrors[index] = 'No puede ser negativa';
    } else if (num > 100) {
      updatedErrors[index] = 'No puede superar 100 años';
    } else {
      updatedErrors[index] = '';
    }
    setAgeErrors(updatedErrors);
  };  
  
  const handlePassTypeChange = (index: number, value: string) => {
    const newTickets = [...tickets];
    newTickets[index].passType = value;
    setTickets(newTickets);
  };

  const isTuesdayOrThursday = (dateStr: string) => {
    const d = new Date(dateStr);
    const day = d.getDay();
    return day === 1 || day === 3;
  };

  const handleDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selected = e.target.value;
    if (isTuesdayOrThursday(selected)) {
      setDate('');
      setDateError('El parque está cerrado los martes y jueves. Por favor elige otro día.');
    } else {
      setDate(selected);
      setDateError(null);
    }
  };

  const handleSubmit = () => {
    if (!date) {
      alert('Por favor, selecciona una fecha de visita.');
      return;
    }

    if (paymentMethod === 'seleccion' || paymentMethod === '') {
      alert('Por favor, selecciona un método de pago.');
      return;
    }
  
    for (let i = 0; i < tickets.length; i++) {
      if (!tickets[i].age) {
        alert(`Por favor, ingresa la edad del visitante ${i + 1}.`);
        return;
      }
    }
  
    for (let i = 0; i < tickets.length; i++) {
      if (!tickets[i].passType) {
        alert(`Por favor, selecciona un tipo de pase para el visitante ${i + 1}.`);
        return;
      }
    }
  
    const ticketWithDate = tickets.map((ticket) => ({
      ...ticket,
      id: crypto.randomUUID(),
      date,
    }));
  
    const saved = localStorage.getItem('tickets');
    const prevTickets = saved ? JSON.parse(saved) : [];
  
    localStorage.setItem('tickets', JSON.stringify([...prevTickets, ...ticketWithDate]));
  
    if (paymentMethod === 'tarjeta') {
      // Guardamos los datos del ticket en localStorage
      localStorage.setItem('pendingTransaction', JSON.stringify({
        tickets: ticketWithDate,
        date,
        quantity,
        paymentMethod: 'tarjeta'
      }));

      // Abrimos MP en una nueva ventana
      window.open('https://www.mercadopago.com.ar', '_blank');
      
      const pendingData = JSON.parse(localStorage.getItem('pendingTransaction') || '{}');
      localStorage.removeItem('pendingTransaction');
      navigate('/success', { state: pendingData });
    } else {
      navigate('/success', { 
        state: {
          tickets: ticketWithDate,
          date: date,
          quantity: quantity,
          paymentMethod: paymentMethod
        } 
      });
    }
  };  

  const calculateTotal = () => {
    return tickets.reduce((sum, ticket) => sum + calculateTicketPrice(ticket), 0);
  };

  return (
    <div className="form-container">
      <div className="card">
      <img
          src="/ecoharmonyPark.png"
          style={{ height: '100px', marginBottom: '-2rem', objectFit: 'contain' }}
        />
        <div className="text-center flex flex-col items-center gap-6">
          <h1 className="text-xl font-bold mb-4">Comprar Entradas</h1>

        <div className="mb-4 w-full max-w-sm">
          <label className="block mb-2">Fecha de visita:</label>
          <input
            type="date"
            className="w-full p-2 border rounded"
            value={date}
            onChange={handleDateChange}
            min={new Date().toISOString().split('T')[0]}
          />
          {dateError && (
            <p className="error-text">
              {dateError}
            </p>
          )}
        </div>

          <div className="mb-4 w-full max-w-sm">
            <label className="block mb-2">Cantidad de entradas:</label>
            <select
              className="w-full p-2 border rounded"
              value={quantity}
              onChange={handleQuantityChange}
            >
              {[...Array(10)].map((_, i) => (
                <option key={i + 1} value={i + 1}>{i + 1}</option>
              ))}
            </select>
          </div>

          {tickets.map((ticket, i) => (
            <div className="cardTickets" key={i}>
              <div className="mb-6 w-full max-w-sm border p-4 rounded bg-gray-50">
                <h3 className="text-lg font-semibold mb-2">Entrada {i + 1}:</h3>

                <label className="block mb-1">Edad:</label>
                <input
                  type="number"
                  className="w-full p-2 border rounded mb-2"
                  value={ticket.age}
                  min={0}
                  onChange={(e) => handleAgeChange(i, e.target.value)}
                />
                {ageErrors[i] && <p className="error-text">{ageErrors[i]}</p>}

                {Number(ticket.age) >= 65}

                <label className="block mb-1">Tipo:</label>
                <select
                  className="w-full p-2 border rounded"
                  value={ticket.passType}
                  onChange={(e) => handlePassTypeChange(i, e.target.value)}
                >
                  <option value="REGULAR">REGULAR</option>
                  <option value="VIP">VIP</option>
                </select>

                <div className="mt-2 text-right font-semibold">
                  Precio: ${calculateTicketPrice(ticket).toLocaleString()}
                </div>
              </div>
            </div>
          ))}

          <div className="w-full max-w-sm border-t pt-4 mt-4">
            <div className="text-xl font-bold text-right">
              Total: ${calculateTotal().toLocaleString()}
            </div>
          </div>

          <div className="mb-4 w-full max-w-sm">
            <label className="block mb-2">Método de Pago:</label>
            <select
              className="w-full p-2 border rounded"
              value={paymentMethod}
              onChange={(e) => setPaymentMethod(e.target.value)}
            >
                            <option value="seleccion">Seleccionar</option>
              <option value="tarjeta">Tarjeta de Crédito</option>
              <option value="efectivo">Efectivo</option>
            </select>
          </div>

          <div className="flex flex-col gap-4 w-full max-w-sm">
            <StyledButton
              text="Comprar"
              tooltip={`Total: $${calculateTotal().toLocaleString()}`}
              onClick={handleSubmit}
            />
            <button
              onClick={() => navigate('/welcome')}
              className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600"
            >
              Cancelar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
