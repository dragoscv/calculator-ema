import React from 'react';
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  //calculator costuri emag
  const [pretVanzare, setPretVanzare] = React.useState(1);
  const [numarProduse, setNumarProduse] = React.useState(1);
  const [costTransport, setCostTransport] = React.useState(17);
  const [costAchizitie, setCostAchizitie] = React.useState(0);
  const [costTransportAchizitie, setCostTransportAchizitie] = React.useState(0.5);
  const [comisionEmag, setComisionEmag] = React.useState(20);
  const [costContabilitate, setCostContabilitate] = React.useState(0.5);
  const [costLogistica, setCostLogistica] = React.useState(0.5);
  const [costMarketing, setCostMarketing] = React.useState(0.5);
  const [costPlataRamburs, setCostPlataRamburs] = React.useState(0.5);
  const impozit = 0.01;
  const [euroToRon, setEuroToRon] = React.useState(0);

  React.useEffect(() => {
    fetch('https://open.er-api.com/v6/latest/EUR')
      .then(response => response.json())
      .then(data => setEuroToRon(data.rates.RON));
  }, []);;

  const totalIncasari = (new Number(pretVanzare) + new Number(costTransport)) * new Number(numarProduse);
  const totalCosturi = (new Number(costAchizitie) + new Number(costTransportAchizitie) + new Number(comisionEmag) + new Number(costContabilitate) + new Number(costLogistica) + new Number(costMarketing) + new Number(costPlataRamburs)) * new Number(numarProduse);
  const profit = totalIncasari - totalCosturi;
  const profitNet = new Number(profit * impozit).toFixed(2);
  const profitNetEURO = new Number(profitNet / euroToRon).toFixed(2);
  


  return (
    <div className={styles.container}>
      <Head>
        <title>Calculator costuri eMag</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className='text-5xl font-bold'>
          Calculator costuri/profit eMag
        </h1>

        <div className='flex flex-row overflow-auto justify-center pt-5'>

          <div className='flex flex-col justify-center pb-2'>
            <div className='pr-2'>
              <label className="block" htmlFor="pretVanzare">
                <span className="block text-sm font-medium text-slate-50 pb-1 pt-2">Pret vanazare produs:</span>
                <input value={pretVanzare} onChange={e => setPretVanzare(e.target.value)} onFocus={e => event.target.select()} type="number" placeholder="Pret vanzare produs" name='pretVanzare' />
              </label>
            </div>
            <div className=''>
              <label className="block" htmlFor="numarProduse">
                <span className="block text-sm font-medium text-slate-50 pb-1 pt-2">Numar Produse: </span>
                <input value={numarProduse} onChange={e => setNumarProduse(e.target.value)} onFocus={e => event.target.select()} type="number" placeholder="Numar Produse" name='numarProduse' />
              </label>
            </div>


            <div className='pr-2'>
              <label className="block" htmlFor="pretVanzare">
                <span className="block text-sm font-medium text-slate-50 pb-1 pt-2">Cost achizitie produs:</span>
                <input value={costAchizitie} onChange={e => setCostAchizitie(e.target.value)} onFocus={e => event.target.select()} type="number" placeholder="Cost achizitie produs" name='pretAchizitie' />
              </label>
            </div>
            <div className=''>
              <label className="block" htmlFor="costTransport">
                <span className="block text-sm font-medium text-slate-50 pb-1 pt-2">Cost Transport: </span>
                <input value={costTransport} onChange={e => setCostTransport(e.target.value)} onFocus={e => event.target.select()} type="number" placeholder="Cost transport" name='costTransport' />
              </label>
            </div>


            <div className='pr-2'>
              <label className="block">
                <span className="block text-sm font-medium text-slate-50 pb-1 pt-2">Comision eMag %:</span>
                <input value={comisionEmag} onChange={e => setComisionEmag(e.target.value)} onFocus={e => event.target.select()} type="number" placeholder="Comision eMag %" />
              </label>
            </div>
            <div className=''>
              <label className="block" htmlFor="costTransport">
                <span className="block text-sm font-medium text-slate-50 pb-1 pt-2">Cost transport achizitie:</span>
                <input value={costTransportAchizitie} onChange={e => setCostTransportAchizitie(e.target.value)} onFocus={e => event.target.select()} type="number" placeholder="Cost transport achizitie" />
              </label>
            </div>


            <div className='pr-2'>
              <label className="block">
                <span className="block text-sm font-medium text-slate-50 pb-1 pt-2">Cost contabilitate:</span>
                <input value={costContabilitate} onChange={e => setCostContabilitate(e.target.value)} onFocus={e => event.target.select()} type="number" placeholder="Comision Contabilitate" />
              </label>
            </div>
            <div className=''>
              <label className="block">
                <span className="block text-sm font-medium text-slate-50 pb-1 pt-2">Cost logistica</span>
                <input value={costLogistica} onChange={e => setCostLogistica(e.target.value)} onFocus={e => event.target.select()} type="number" placeholder="Cost logistica" />
              </label>
            </div>


            <div className='pr-2'>
              <label className="block">
                <span className="block text-sm font-medium text-slate-50 pb-1 pt-2">Cost marketing:</span>
                <input value={costMarketing} onChange={e => setCostMarketing(e.target.value)} onFocus={e => event.target.select()} type="number" placeholder="Comision Marketing" />
              </label>
            </div>
            <div className=''>
              <label className="block">
                <span className="block text-sm font-medium text-slate-50 pb-1 pt-2">Cost plata ramburs</span>
                <input value={costPlataRamburs} onChange={e => setCostPlataRamburs(e.target.value)} onFocus={e => event.target.select()} type="number" placeholder="Cost plata ramburs" />
              </label>
            </div>
          </div>

          <div className='flex-col sticky top-0 self-start'>
            <p className='text-amber-300'>Total Incasari: {totalIncasari} RON</p>
            <p className='text-red-600'>Costuri: {totalCosturi} RON</p>
            <p className='text-green-900'>Profit Brut: {profit} RON</p>
            <p className='text-green-500'>Profit Net impozit {impozit}%: {profitNet} RON</p>
            <p className='text-green-500'>Profit Net EURO: {profitNetEURO} €</p>
            {/* <p>{(function () {
              return ('IIFE');
            })()}</p> */}
          </div>

        </div>


      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  )
}
