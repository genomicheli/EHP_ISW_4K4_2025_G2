import { useEffect, useState, useRef } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import emailjs from '@emailjs/browser';
import EmailModal from './EmailMessage';
import QRCode from 'qrcode';
import { calculateTicketPrice } from '../utils/pricing';

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
          passType: ticket.passType,
          isRetired: ticket.isRetired
        }))
      );

      const qrCodes = await Promise.all(qrPromises);
      
      // Crear el contenido HTML para el email con los QR codes
      const qrHtml = qrCodes.map((qr, index) => `
        <div style="background-color: #f8fafc; border-radius: 8px; padding: 20px; margin-bottom: 30px; box-shadow: 0 2px 4px rgba(0,0,0,0.1);">
          <h2 style="color: #16a34a; font-size: 20px; margin-bottom: 15px; text-align: center;">
            Entrada ${index + 1}
          </h2>
          <div style="text-align: center;">
            <img src="${qr}" alt="QR Code" style="width: 200px; height: 200px; margin-bottom: 10px;"/>
            <p style="font-size: 14px; color: #4b5563; margin: 0;">
              <strong>Código:</strong> ${state.tickets[index].id}
            </p>
            <p style="font-size: 14px; color: #4b5563; margin: 5px 0;">
              <strong>Tipo:</strong> ${state.tickets[index].passType}
            </p>
            <p style="font-size: 14px; color: #4b5563; margin: 0;">
              <strong>Precio:</strong> $${calculateTicketPrice(state.tickets[index]).toLocaleString()}
            </p>
          </div>
        </div>
      `).join('');

      // Simplificar la plantilla de email para solo incluir los QR codes
      const emailTemplate = `
        <div style="padding: 0 20px;">
          <div style="margin-top: 30px;">
            ${qrHtml}
          </div>
        </div>
      `;

      // Enviar email con los QR codes
      emailjs.send(
        'service_hkezf1o',
        'template_4odi8er',
        {
          to_email: 'isw635289@gmail.com',
          ticket_id: state.tickets.map(t => t.id).join(', '),
          date: state.date,
          quantity: state.quantity,
          qr_codes: emailTemplate
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
          
          <div className="mt-4 w-full">
            {state.tickets.map((ticket, index) => (
              <p key={index} className="text-sm">
                Entrada {index + 1}: ${calculateTicketPrice(ticket).toLocaleString()}
              </p>
            ))}
            <p className="font-bold mt-2">
              Total: ${state.tickets.reduce((sum, ticket) => 
                sum + calculateTicketPrice(ticket), 0
              ).toLocaleString()}
            </p>
          </div>
          
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
