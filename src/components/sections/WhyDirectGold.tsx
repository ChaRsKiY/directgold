const WhyDirectGold = () => {
  return (
    <section className="px-[10%] py-20 bg-gradient-to-r from-[var(--color-light-bg)] via-[var(--color-light-bg)] to-[#DEDBD5]">
      <h2 className="text-6xl max-md:text-4xl font-bold text-[var(--color-primary-gold)] mb-12 max-w-7xl mx-auto">We set new gold standards</h2>
      <div className="grid grid-cols-2 justify-between gap-8 items-center h-fit max-md:grid-cols-1 max-w-7xl mx-auto">
        <div className="bg-[var(--color-primary-gold)] text-white p-5 rounded-md">
            <h3 className="font-bold">Offizieller LBMA Referenzpreis</h3>
            <p>keine versteckten Kosten</p>
        </div>
        <div className="bg-[var(--color-primary-gold)] text-white p-5 rounded-md">
            <h3 className="font-bold">100% physisches Eigentum</h3>
            <p>nummerierte, zugeordnete Barren</p>
        </div>
        <div className="bg-[var(--color-primary-gold)] text-white p-5 rounded-md">
            <h3 className="font-bold">24/7 unabhängige Verifizierung</h3>
            <p>Qualität, Herkunft, Lagerstandort</p>
        </div>
        <div className="bg-[var(--color-primary-gold)] text-white p-5 rounded-md">  
            <h3 className="font-bold">Sicherste Lagerung</h3>
            <p>bei Loomis Zürich/Kloten, Schweiz</p>
        </div>
        <div className="bg-[var(--color-primary-gold)] text-white p-5 rounded-md">
            <h3 className="font-bold">Neubarren höchster Qualität</h3>
            <p>von LBMA-zertifizierten Raffinerien</p>
        </div>
        <div className="bg-[var(--color-primary-gold)] text-white p-5 rounded-md">
            <h3 className="font-bold">Maximale Liquidität</h3>
            <p>jederzeit verkaufen oder physisch ausliefern lassen</p>
        </div>
      </div>
    </section>
  );
};

export default WhyDirectGold;