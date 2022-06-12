const PR_API = 'https://api.privatbank.ua/p24api/pubinfo?json&exchange&coursid=5';

export async function getRate(): Promise<Privat[]> {
  const response = await fetch(PR_API);

  return response.json();
}
