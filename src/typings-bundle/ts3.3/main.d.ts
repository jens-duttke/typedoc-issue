// Minimum TypeScript Version: 3.3

// @ts-expect-error -- TypeScript complains about a conflict with the type definition in /ts4.0/main.d.ts
declare module 'hexedit' {
	type A = any;
	type B = any;
	type C = any;
	type D = any;
	type E = any;
	type F = any;
	type G = any;

	export type H = any;
}
