import type { BusinessCardModel } from './BusinessCard.model';

interface Props {
  cardInfo?: BusinessCardModel;
}

export function BusinessCard({ cardInfo }: Props) {
  //
  const handleClickEmptyCard = () => {
    window.location.href = 'mailto:tjran7017@gmail.com';
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
          <img src="/assets/img/card-time.svg" alt="time" />
          <p>{cardInfo.period}</p>
        </div>
        <div className="contact">
          <img src="/assets/img/card-mail.png" alt="laptop" />
          <p>tjran7017@gmail.com</p>
        </div>
      </div>

      {/*Copied https://codepen.io/SRHubli/pen/djdPqz */}
      {/*Design Insipiration:*/}
      {/*https://www.behance.net/gallery/27133319/Material-Business-Card-Template-(Freebie)*/}
    </div>
  );
}
