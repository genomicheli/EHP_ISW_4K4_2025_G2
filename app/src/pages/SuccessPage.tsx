import { useEffect, useState, useRef } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import emailjs from '@emailjs/browser';
import EmailModal from './EmailMessage';
import QRCode from 'qrcode';

export default function SuccessPage() {
  const { state } = useLocation();
  const navigate = useNavigate();
  const [modalOpen, setModalOpen] = useState(true);
  const emailSent = useRef(false);

  useEffect(() => {
    if (!state || emailSent.current || !state.tickets || state.tickets.length === 0) return;

    // Generar QR codes para cada ticket
    const generateQRs = async () => {
      const qrPromises = state.tickets.map(ticket => 
        QRCode.toDataURL(JSON.stringify({
          id: ticket.id,
          date: state.date,
          age: ticket.age,
          passType: ticket.passType
        }))
      );

      const qrCodes = await Promise.all(qrPromises);
      
      // Crear el contenido HTML para el email con los QR codes
      const qrHtml = qrCodes.map((qr, index) => `
        <div style="margin-bottom: 20px;">
          <p>Ticket ${index + 1}:</p>
          <img src="${qr}" alt="QR Code" style="width: 200px; height: 200px;"/>
        </div>
      `).join('');

      // Enviar email con los QR codes
      emailjs.send(
        'service_hkezf1o',
        'template_4odi8er',
        {
          to_email: 'isw635289@gmail.com',
          ticket_id: state.tickets.map(t => t.id).join(', '),
          date: state.date,
          quantity: state.quantity,
          qr_codes: qrHtml
        },
        'gdx2evaAxTK0Cc1_z'
      ).then(
        () => {
          console.log('Correo con QR codes enviado con éxito');
          emailSent.current = true;
        },
        err => console.error('Error enviando correo:', err)
      );
    };

    generateQRs().catch(console.error);

    return () => {
      emailSent.current = true;
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
            <p>Se enviaron los datos y códigos QR al email:</p>
            <p><strong>Fecha:</strong> ${state.date}</p>
            <p><strong>Cantidad:</strong> ${state.quantity}</p>
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
          <p className="mt-4">Los códigos QR de sus entradas han sido enviados por email.</p>

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
