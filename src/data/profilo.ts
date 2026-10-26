// Dati personali usati in tutto il sito: modificali qui una volta sola
export const profilo = {
	nome: 'Leonardo Intagliata',
	// Ruolo mostrato nella Hero e nel titolo delle pagine
	ruolo: 'Junior IT Specialist',
	competenzeChiave: 'Python · Cloud · Supporto IT',
	citta: 'Milano',
	email: 'intagliataleonardo@outlook.it',
	github: 'https://github.com/Leonardo-Intagliata',
	linkedin: 'https://www.linkedin.com/in/leonardo-intagliata-a29902198',
	cv: '/cv.pdf',
};

// Voci della barra laterale e della home.
// "icona" è un elenco di tracciati SVG (viewBox 24x24, solo contorno).
export const navigazione = [
	{
		href: '/',
		label: 'Home',
		descrizione: '',
		icona: ['M3 11.5 12 4l9 7.5', 'M5.5 10v10h13V10', 'M10 20v-5h4v5'],
	},
	{
		href: '/chi-sono',
		label: 'Chi sono',
		descrizione: 'La mia storia, il percorso e cosa porto dalle esperienze passate.',
		icona: ['M12 12a4 4 0 1 0 0-8 4 4 0 0 0 0 8z', 'M4 20c1.5-3.5 4.5-5 8-5s6.5 1.5 8 5'],
	},
	{
		href: '/lavori',
		label: 'Lavori',
		descrizione: 'I progetti che ho realizzato e quelli che sto sviluppando.',
		icona: ['M8 8l-4 4 4 4', 'M16 8l4 4-4 4', 'M13.5 6l-3 12'],
	},
	{
		href: '/contatti',
		label: 'Contatti',
		descrizione: 'Come raggiungermi e le risposte alle domande più comuni.',
		icona: ['M3.5 6.5h17v11h-17z', 'M4 7l8 6 8-6'],
	},
	{
		href: '/cv',
		label: 'CV',
		descrizione: 'Il lavoro che cerco e il mio curriculum da leggere o scaricare.',
		icona: ['M6 3.5h8l4 4v13H6z', 'M14 3.5v4h4', 'M9 12h6', 'M9 15.5h6'],
	},
];
