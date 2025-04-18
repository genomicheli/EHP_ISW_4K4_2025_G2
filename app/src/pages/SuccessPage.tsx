import { useEffect, useState, useRef } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import emailjs from '@emailjs/browser';
import EmailModal from './EmailMessage';

export default function SuccessPage() {
  const { state } = useLocation();
  const navigate = useNavigate();
  const [modalOpen, setModalOpen] = useState(true);
  const emailSent = useRef(false);

  useEffect(() => {
    if (!state || emailSent.current || !state.tickets || state.tickets.length === 0) return;

    const ticketIds = state.tickets.map(ticket => ticket.id).join(', ');
    
    emailjs.send(
      'service_hkezf1o',
      'template_4odi8er',
      {
        to_email: 'isw635289@gmail.com',
        ticket_id: ticketIds,
        date: state.date,
        quantity: state.quantity,
      },
      'gdx2evaAxTK0Cc1_z'
    ).then(
      () => {
        console.log('Correo enviado con éxito');
        console.log('Tickets:', state.tickets);
        emailSent.current = true;
      },
      err => console.error('Error enviando correo:', err)
    );

    return () => {
      emailSent.current = true; // Aseguramos que no se envíe más de una vez
    };
  }, [state]);

  if (!state) return <p>No hay datos de la compra.</p>;

  return (
    <>
      {modalOpen && (
        <EmailModal
          isOpen={modalOpen}
          onClose={() => setModalOpen(false)}
          emailContent={`
            <p>Se enviaron los datos:</p>
            <p><strong>Fecha:</strong> ${state.date}</p>
            <p><strong>Cantidad:</strong> ${state.quantity}</p>
            <p><strong>IDs de tickets:</strong> ${state.tickets.map(ticket => ticket.id).join(', ')}</p>
          `}
        />
      )}
      <div className="form-container">
        <div className="card flex flex-col items-center">
        <img
            src="/ecoharmonyPark.png"
            style={{ height: '100px', marginBottom: '-2rem', objectFit: 'contain' }}
          />
          <h1 className="text-2xl font-bold mb-4">¡Compra exitosa!</h1>
          <p>Fecha: <strong>{state.date}</strong></p>
          <p>Entradas: <strong>{state.quantity}</strong></p>

          <div className="flex gap-4 w-full mt-6">
            <button
              onClick={() => navigate('/welcome')}
              className="flex-1 bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600"
            >
              Volver
            </button>
            <button
              onClick={() => navigate('/')}
              className="flex-1 bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
            >
              Cancelar
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
