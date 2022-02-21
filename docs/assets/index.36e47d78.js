import { j as a, r as d, R as g, a as y } from './vendor.d4cffed6.js';
const x = function () {
	const n = document.createElement('link').relList;
	if (n && n.supports && n.supports('modulepreload')) return;
	for (const e of document.querySelectorAll('link[rel="modulepreload"]')) o(e);
	new MutationObserver((e) => {
		for (const r of e)
			if (r.type === 'childList')
				for (const i of r.addedNodes)
					i.tagName === 'LINK' && i.rel === 'modulepreload' && o(i);
	}).observe(document, { childList: !0, subtree: !0 });
	function c(e) {
		const r = {};
		return (
			e.integrity && (r.integrity = e.integrity),
			e.referrerpolicy && (r.referrerPolicy = e.referrerpolicy),
			e.crossorigin === 'use-credentials'
				? (r.credentials = 'include')
				: e.crossorigin === 'anonymous'
				? (r.credentials = 'omit')
				: (r.credentials = 'same-origin'),
			r
		);
	}
	function o(e) {
		if (e.ep) return;
		e.ep = !0;
		const r = c(e);
		fetch(e.href, r);
	}
};
x();
const t = a.exports.jsx,
	l = a.exports.jsxs,
	p = a.exports.Fragment,
	N = ({ setCrypto: s }) =>
		t('input', {
			type: 'text',
			placeholder: 'Search...',
			onChange: (c) => {
				s(c.target.value);
			},
			className: 'field',
		}),
	L = async () =>
		(
			await (
				await fetch(
					'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false&price_change_percentage=12h'
				)
			).json()
		).map((e) => ({
			id: e.id,
			rank: e.market_cap_rank,
			name: e.name,
			icon: e.image,
			price: e.current_price,
			symbol: e.symbol,
			lastUpdate: e.last_updated,
			volume: e.total_volume,
		})),
	_ = () => {
		const [s, n] = d.exports.useState({ data: [], loading: !0 });
		return (
			d.exports.useEffect(() => {
				L().then((c) => n({ data: c, loading: !1 }));
			}, ['']),
			s
		);
	},
	v = ({ crypto: s }) => {
		const { data: n, loading: c } = _();
		return l(p, {
			children: [
				c && t('p', { children: 'cargando...' }),
				l('table', {
					children: [
						t('thead', {
							children: l('tr', {
								children: [
									t('th', { children: '# Rank' }),
									t('th', { className: 'logo', children: 'icon' }),
									t('th', { children: 'Name' }),
									t('th', { children: 'Symbol' }),
									t('th', { children: 'Price' }),
									t('th', { children: 'LastUpdate' }),
									t('th', { children: 'Volumen' }),
								],
							}),
						}),
						t('tbody', {
							children: n
								.filter(({ name: o }) => o.toLowerCase().includes(s.toLowerCase()))
								.map(
									({
										id: o,
										rank: e,
										name: r,
										icon: i,
										price: h,
										symbol: u,
										lastUpdate: m,
										volume: f,
									}) =>
										l(
											'tr',
											{
												id: o,
												className: 'prioirty',
												children: [
													t('td', { className: 'smallTd', children: e }),
													t('td', {
														className: 'logo',
														children: t('img', {
															src: i,
															alt: 'logo',
															width: '40px',
															height: '40px',
														}),
													}),
													t('td', {
														className: 'nameList',
														children: t('p', { children: r }),
													}),
													t('td', { className: 'smallTd', children: u }),
													l('td', {
														className: 'smallTd',
														children: ['$', h.toFixed(2)],
													}),
													t('td', { className: 'update', children: m }),
													t('td', { children: f }),
												],
											},
											o
										)
								),
						}),
					],
				}),
			],
		});
	},
	b = () => {
		const [s, n] = d.exports.useState('');
		return l(p, {
			children: [
				t('div', { className: 'App', children: t('h1', { children: 'CryptoApp' }) }),
				t(N, { setCrypto: n }),
				t(v, { crypto: s }),
			],
		});
	};
g.render(t(y.StrictMode, { children: t(b, {}) }), document.getElementById('root'));
