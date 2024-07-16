export function EmptyBusinessCard() {
  const handleClickEmptyCard = () => {
    window.location.href = 'mailto:tjran7017@gmail.com';
  };

  return (
    <div className="business-card empty">
      <div className="info-wrap empty" onClick={handleClickEmptyCard}>
        <p>+</p>
      </div>
    </div>
  );
}
