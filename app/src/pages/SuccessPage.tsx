import { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import emailjs from '@emailjs/browser';
import EmailModal from './EmailMessage';


export default function SuccessPage() {
  const { state } = useLocation();
  const navigate = useNavigate();
  const [modalOpen, setModalOpen] = useState(true);

  if (!state) return <p>No hay datos de la compra.</p>;

  useEffect(() => {
    emailjs.send(
      'service_hkezf1o',
      'template_4odi8er',
      {
        to_email: 'isw635289@gmail.com',
        ticket_id: state.id,
        date: state.date,
        quantity: state.quantity,
      },
      'gdx2evaAxTK0Cc1_z'
    ).then(
      () => console.log('Correo enviado'),
      err => console.error('Error enviando correo:', err)
    );
  }, [state]);

  return (
    <>
      {modalOpen && (
      <EmailModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        emailContent={`<p>Se enviaron los datos: <strong>Fecha:</strong> ${state.date}, <strong>Cantidad:</strong> ${state.quantity}</p>`}
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
