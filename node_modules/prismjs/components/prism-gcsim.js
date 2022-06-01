// https://www.json.org/json-en.html
Prism.languages.gcsim = {
	property: {
		pattern: /(^|[^\\])"(?:\\.|[^\\"\r\n])*"(?=\s*:)/,
		lookbehind: true,
		greedy: true,
	},
	string: {
		pattern: /(^|[^\\])"(?:\\.|[^\\"\r\n])*"(?!\s*:)/,
		lookbehind: true,
		greedy: true,
	},
	comment: {
		pattern: /\#.*/,
		greedy: true,
	},
	keywords: {
		pattern:
			/\b(?:chain|wait_for|wait(?: )|restart|reset_limit|hurt|target|energy|active|options|add|char|stats|weapon|set|lvl|refine|cons|talent|start_hp|count|\+params|until)\b/,
		alias: "keyword",
	},
	options: {
		pattern: /\b(?:debug|iteration|duration|workers|mode)\b/,
		alias: "tag",
	},
	abilities: {
		pattern:
			/\b(?:skill|burst|attack|charge|aim|high_plunge|low_plunge|jump|dash)\b/,
		alias: "function",
	},
	characters: {
		pattern:
			/\b(?:travelerelectro|traveleranemo|travelergeo|travelerhydro|travelercryo|travelerpyro|travelerdendro|albedo|aloy|amber|barbara|beidou|bennett|chongyun|diluc|diona|eula|fischl|ganyu|hutao|jean|kaedeharakazuha|kazuha|kaeya|kamisatoayaka|ayaka|kamisatoayato|ayato|keqing|klee|kujousara|kujosara|sara|lisa|mona|ningguang|noelle|qiqi|raidenshogun|raiden|razor|rosaria|sangonomiyakokomi|kokomi|sayu|sucrose|tartaglia|thoma|venti|xiangling|xiao|xingqiu|xinyan|yanfei|yoimiya|yunjin|zhongli|gorou|aratakiitto|itto|shenhe|yae(?:miko)?)\b/,
		alias: "constant",
	},
	other: {
		pattern:
			/\b(?:value|max|filler|interval|every|once|amount|ele(?:ctro)?(?:\%)?|resist|pyro(?:\%)?|dendro(?:\%)?|hydro(?:\%)?|geo(?:\%)?|anemo(?:\%)?|physical|cryo(?:\%)?)/,
		alias: "tag",
	},
	stats: {
		pattern:
			/\b(?:(?:hp(?:\%)?|atk(?:\%)?|def(?:\%)?|er|em|cr|cd|heal|phys\%))/,
		alias: "tag",
	},
	stringkeys: {
		pattern: /\b(?:sl|apl)\b/,
		alias: "string",
	},
	flags: {
		pattern:
			/(?:\+if|\+swap_to|\+swap_lock|\+is_onfield|\+needs|\+limit|\+timeout|\+try|\+drop|\+label)\b/,
		alias: "tag",
	},
	number: /-?\b\d+(?:\.\d+)?(?:e[+-]?\d+)?\b/i,
	punctuation: /[{}[\],]/,
	operator: /:/,
	boolean: /\b(?:false|true)\b/,
};

// Prism.languages.webmanifest = Prism.languages.gcsim;
