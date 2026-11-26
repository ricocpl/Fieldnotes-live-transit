export const VERSION='1.0.0';
export const LINES={elizabeth:{name:'Elizabeth line',colour:'#6950A1'},'heathrow-express':{name:'Heathrow Express',colour:'#008578'},jubilee:{name:'Jubilee line',colour:'#A0A5A9'},northern:{name:'Northern line',colour:'#000000'}};
export const TFL_LINES=['elizabeth','jubilee','northern'];
export const HEX_STATIONS=[{id:'hex:PAD',crs:'PAD',name:'London Paddington',line:'heathrow-express',lat:51.5154,lon:-0.1755},{id:'hex:HXX',crs:'HXX',name:'Heathrow Terminals 2 & 3',line:'heathrow-express',lat:51.471,lon:-0.4543},{id:'hex:HWV',crs:'HWV',name:'Heathrow Terminal 5',line:'heathrow-express',lat:51.4723,lon:-0.488}];
export const TFL='https://api.tfl.gov.uk';
// Public configuration only. Use a protected HTTPS proxy for confidential credentials.
export const DEFAULT_PROXY='';
export const FRESH_MS=90000, STATUS_FRESH_MS=180000;
export const BRANCHES={elizabeth:['Heathrow','Terminal 4','Terminal 5','Reading / Maidenhead','Shenfield','Abbey Wood'],northern:['Bank','Charing Cross','Edgware','High Barnet','Mill Hill East','Morden','Battersea Power Station']};
