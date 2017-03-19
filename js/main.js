var Bands = ['The Old Dog','The Plot in You','The Midway State','Say Anything','We Came as Romans','Oh Sleeper',
'The Bled','Anywhere But Here','Counterparts','A Skylit Drive','The Devils Own','The Death By Chocolate'];


function strip(BandNames)
{
	return BandNames.replace(/^(a |the |an )/i, '').trim();
	// console.log(BandNames.replace(/^(a |the |an )/i, '').trim());
}

var SortedBands = Bands.sort((a,b) => strip(a) > strip(b) ? 1:-1);

document.querySelector('.bands').innerHTML = SortedBands.map(band => `<li>${band}</li>`).join('');