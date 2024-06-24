import type { BusinessCardModel } from './BusinessCard.model';

interface Props {
  cardInfo?: BusinessCardModel;
}

export function BusinessCard({ cardInfo }: Props) {
  //
  const handleClickEmptyCard = () => {
    const email = 'tjran7017@gmail.com';
    window.location.href = 'mailto:' + email;
  };

  if (!cardInfo) {
    return (
      <div className="business-card empty">
        <div className="info-grid empty" onClick={handleClickEmptyCard}>
          <p>+</p>
        </div>
      </div>
    );
  }

  return (
    <div className="business-card">
      <div className="color-grid">
        <div className="color1"></div>
        <div className="color2"></div>
        <div className="color3"></div>
        <div className="color4"></div>
      </div>
      <div className="info-grid">
        <div className="name">
          <h2>{cardInfo.company}</h2>
          <h5>{cardInfo.job}</h5>
        </div>
        <div className="period">
          <img src="/assets/img/time.svg" alt="time" />
          <p>{cardInfo.period}</p>
        </div>
        <div className="contact">
          <img src="/assets/img/contact.svg" alt="laptop" />
          <p>tjran7017@ gmail.com</p>
          <p>010-4288-7980</p>
        </div>
      </div>

      {/*Copied https://codepen.io/SRHubli/pen/djdPqz */}
      {/*Design Insipiration:*/}
      {/*https://www.behance.net/gallery/27133319/Material-Business-Card-Template-(Freebie)*/}
    </div>
  );
}
