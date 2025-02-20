const cars = [
    { id: 1, marka: 'Mercedes', qiymet: '10 500', model: 'w202', mator: '2.0', il: '1998', reng: 'silver', img: 'https://turbo.azstatic.com/uploads/full/2022%2F02%2F07%2F16%2F20%2F36%2F05ae3ec7-b845-4458-8033-99eec8aec1a2%2F83217_ryHX2Q7AONB3-jC_sEJ3mQ.jpg' },
    { id: 2, marka: 'Kia', qiymet: '21 000', model: 'Rio', mator: '1.4', il: '2014', reng: 'silver', img: 'https://turbo.azstatic.com/uploads/full/2021%2F09%2F10%2F11%2F40%2F18%2Fbe262b8b-13ff-40ee-9664-4c7c4ea93e4b%2F94552_bf7HpneCobaNn8ooAalBwg.jpg' },
    { id: 3, marka: 'Hyundai', qiymet: '12 000', model: 'Tucson', mator: '2.0', il: '2014', reng: 'black', img: 'https://turbo.azstatic.com/uploads/f660x496/2020%2F02%2F08%2F12%2F31%2F23%2Fdfd4bcdd-5279-4807-85cb-58aa153c900f%2F44290_Il5UqH7nhzVTrAAfdt5BuQ.jpg' },
    { id: 4, marka: 'LADA (VAZ)', qiymet: '35 000', model: '2107', mator: '1.6', il: '2010', reng: 'black', img: 'https://turbo.azstatic.com/uploads/full/2022%2F09%2F29%2F04%2F48%2F26%2Ff85c3fb0-4f77-4157-8b15-a3122bbaf36d%2F15612_S_xRbeuG6jQhZhkc_JM3wg.jpg' },
    { id: 5, marka: 'BMW', qiymet: '28 700', model: 'M5 e39', mator: '4.4', il: '1998', reng: 'blue', img: 'https://turbo.azstatic.com/uploads/full/2020%2F08%2F15%2F17%2F42%2F55%2F5e61d0d8-ac41-42d4-8a34-33f9c563bba8%2F4747_ZOpsrcdSRl_mByG6tDsiqQ.jpg' },
    { id: 6, marka: 'Mercedes', qiymet: '86 500', model: 'CLS', mator: '5.5', il: '2013', reng: 'gray', img: 'https://turbo.azstatic.com/uploads/full/2021%2F12%2F09%2F01%2F51%2F22%2F2e3d6e19-baa7-4625-89e0-d358238808ce%2F21872_z_Z4BhoRifgwGf0Fz_hvJw.jpg' },
    { id: 7, marka: 'Toyota', qiymet: '54 000', model: 'Camry', mator: '3.0', il: '2021', reng: 'white', img: 'https://turbo.azstatic.com/uploads/full/2021%2F06%2F18%2F16%2F16%2F02%2Fd4a556f8-adc6-4ff8-897b-2079ea777987%2F24971_KEan9mcELSSmUAPbxG1KEw.jpg' },
    { id: 8, marka: 'Porsche', qiymet: '118 400', model: '911 Carrera', mator: '4.4', il: '2023', reng: 'cyan', img: 'https://turbo.azstatic.com/uploads/full/2020%2F08%2F13%2F13%2F32%2F55%2F012a26df-efae-4cf0-b763-a4c3de17ae23%2F46349_cqQK5HyMFGcJOEMh1pCm1A.jpg' },
    { id: 9, marka: 'Dodge', qiymet: '38 500', model: 'Challenger', mator: '7.2', il: '2018', reng: 'black', img: 'https://turbo.azstatic.com/uploads/full/2021%2F04%2F09%2F10%2F02%2F28%2F9a6bf393-9f08-476b-abc0-d6278f1d6668%2F37456_34ZTVBn26COoCWhsqBx3vw.jpg' },
    { id: 10, marka: 'Nissan', qiymet: '86 000', model: 'GTR R-35', mator: '3.0', il: '2014', reng: 'black', img: 'https://turbo.azstatic.com/uploads/full/2017%2F02%2F16%2F00%2F02%2F00%2F573%2F54000_4wUHTVdrb_-kLx6BJMuF8Q.jpg' },
    { id: 11, marka: 'Audi', qiymet: '124 100', model: 'RS7', mator: '4.0', il: '2015', reng: 'dimgrey', img: 'https://turbo.azstatic.com/uploads/full/2021%2F05%2F29%2F15%2F33%2F07%2Fc9bec2ac-97eb-4e07-bc8a-509f1898dd7d%2F82001_MmzL0_nnwbSnJI6rtabq7Q.jpg' },
    { id: 12, marka: 'Toyota',qiymet: '15 800', model: 'Corolla', mator: '1.6', il: '2016', reng: 'white',img: 'https://turbo.azstatic.com/uploads/full/2020%2F09%2F24%2F08%2F21%2F40%2Facdc9e7e-d243-46fd-b2ce-dc51a85c8343%2F66667_OxPaAqSg8MzGM7diar5WlQ.jpg'},
    { id: 13, marka: 'Honda', qiymet: '18 500', model: 'Civic', mator: '1.8', il: '2017', reng: 'cyan', img: 'https://turbo.azstatic.com/uploads/full/2023%2F03%2F29%2F18%2F06%2F09%2F1dc0eed8-15d4-46f9-abf5-0b772be61d2d%2F98117_r2JD4f3tCYHUBNquO-VTdQ.jpg'},
    { id: 14, marka: 'Volkswagen', qiymet: '23 200', model: 'Golf', mator: '2.0', il: '2019', reng: 'white', img: 'https://turbo.azstatic.com/uploads/full/2023%2F02%2F17%2F15%2F03%2F28%2F97566bce-3bcb-43ff-8c96-5274fdf59360%2F74622_ZZd9ojx9ZyTk5EOyx7D3wA.jpg'}
]
const cards = document.getElementById('cards');
const card = document.getElementById('card');
const sidebar = document.getElementById('sidebar');
const breadcrumb = document.getElementById('breadcrumb');
const searchBtn = document.getElementById('searchBtn');
let markalar = document.getElementById('markalar');
const option = document.querySelector('option')

const printCards = () => {
    let kod = ''
    cards.innerHTML = '';
    cars.map(item => kod += `
        <div class="rounded-md shadow-md bg-gray-50 text-gray-800 w-[200px] ">
            <div class="w-[200px] h-[180px] overflow-hidden">
                <img style="cursor:pointer" onclick="showDet(${item.id})" src="${item.img}" alt="" class="w-full h-full object-cover/ ">
            </div>
            <div class="flex flex-col justify-between p-4 space-y-4 bg-gray-100">
                <div class="space-y-2">
                    <h2 onclick="showDet(${item.id})" class="text-xl font-semibold tracking-wide">${item.qiymet} AZN</h2>
                    <p class="text-gray-800">${item.marka} ${item.model}</p>
                    <p class="text-gray-800">${item.il}, ${item.mator}, <span style="color:${item.reng}">${item.reng}</span></p>
                </div>
            </div>
        </div>`                             
    );

        cards.innerHTML = kod;
};
printCards();

function showDet(id) {
    const obj = cars.find(item => item.id == id)
    cards.innerHTML = ''
    let kod = ''
    kod += `  <section class="bg-white text-black">
                                <div class="container max-w-6xl mt-[30px] mx-auto space-y-6 ">
                                    <h2 class="text-[30px]" id="breadcrumb"> >>${obj.marka},${obj.model},${obj.mator}</h2>
                                    <div class="flex gap-4 flex-col sm:flex-row">
                                        <img src="${obj.img}" alt="" class="object-cover w-[100%] sm:w-[65%]  rounded-[15px] sm:h-120  bg-gray-500">
                                        <div class="p-6 w-[100%] sm:w-[35%] rounded-[15px] border-2 border-gray-900 sm:h-120 ">
                                            <h3 class="text-2xl font-semibold group-hover:underline group-focus:underline">Qiymet: ${obj.qiymet} AZN</h3>
                                            <div class="flex gap-4 py-4">
                                                <img src="${obj.img}" class="w-[80px] h-[80px] rounded-[10px]" />
                                                <div>
                                                    <span>Autolux Azerbaijan - ${obj.model}</span>
                                                    <p>Resmi numayende</p>
                                                </div>
                                            </div>
                                            <button class="py-[15px] my-2 w-full bg-green-600 rounded-[15px] text-white">Zeng et</button>
                                            <p class="text-xs py-2 text-black">There's only one</p>
                                            <p class="text-gray-400">${obj.marka} avtomobillerinin azerbaycanda resmi distributoru Avtoluks azerbaycan MMC-dir. 20% ilkin odenis, 10% illik bank faizi, 5 illik</p>
                                            <button class="py-[15px] my-2 w-full bg-blue-500 rounded-[15px] text-white" onclick="printCards()">Salona kec</button>
                                        </div>
                                    </div>
                                </div>
                            </section>`
    cards.innerHTML = kod;
}

function handleBasket(status) {
    sidebar.style.right = status ? '0' : '-30vw'
}


function axtar() {
    let axtaris = searchBtn.value.toLowerCase();
    let kod = ''
    cars.filter(item => item.marka.toLowerCase().includes(axtaris) ? kod += `<div class="rounded-md shadow-md bg-gray-50 text-gray-800 max-w-[250px] ">
                                                                        <div class="max-w-[250px] h-[180px] overflow-hidden">
                                                                            <img style="cursor:pointer" onclick="showDet(${item.id})" src="${item.img}" alt="" class="w-full h-full object-cover/ ">
                                                                        </div>
                                                                        <div class="flex flex-col justify-between p-4 space-y-4 bg-gray-100">
                                                                            <div class="space-y-2">
                                                                                <h2 onclick="showDet(${item.id})" class="text-xl font-semibold tracking-wide">${item.qiymet} AZN</h2>
                                                                                <p class="text-gray-800">${item.marka} ${item.model}</p>
                                                                                <p class="text-gray-800">${item.il}, ${item.mator}, <span style="color:${item.reng}">${item.reng}</span></p>
                                                                            </div>
                                                                        </div>
                                                                    </div>`          
                                                                    : ``)
    cards.innerHTML = kod;
}
let kod = '<option>All</option>'; 
cars.forEach(item => kod += `<option>${item.marka}</option>`);
markalar.innerHTML = kod;

function displayCars() {
    let kod = '';
    const selectedMarka = markalar.value; 

    if (selectedMarka === 'All') {
        cars.map(item => kod += `<div class="rounded-md shadow-md bg-gray-50 text-gray-800 w-[200px] ">
                                    <div class="w-[200px] h-[180px] overflow-hidden">
                                        <img style="cursor:pointer" onclick="showDet(${item.id})" src="${item.img}" alt="" class="w-full h-full object-cover/ ">
                                    </div>
                                    <div class="flex flex-col justify-between p-4 space-y-4 bg-gray-100">
                                        <div class="space-y-2">
                                            <h2 onclick="showDet(${item.id})" class="text-xl font-semibold tracking-wide">${item.qiymet} AZN</h2>
                                            <p class="text-gray-800">${item.marka} ${item.model}</p>
                                            <p class="text-gray-800">${item.il}, ${item.mator}, <span style="color:${item.reng}">${item.reng}</span></p>
                                        </div>
                                    </div>
                                </div> 
                                `);
    } else {
        cars.filter(item => item.marka === selectedMarka)
                  .map(item => kod += `<div class="rounded-md shadow-md bg-gray-50 text-gray-800 w-[200px] ">
                                            <div class="w-[200px] h-[180px] overflow-hidden">
                                                <img style="cursor:pointer" onclick="showDet(${item.id})" src="${item.img}" alt="" class="w-full h-full object-cover/ ">
                                            </div>
                                            <div class="flex flex-col justify-between p-4 space-y-4 bg-gray-100">
                                                <div class="space-y-2">
                                                    <h2 onclick="showDet(${item.id})" class="text-xl font-semibold tracking-wide">${item.qiymet} AZN</h2>
                                                    <p class="text-gray-800">${item.marka} ${item.model}</p>
                                                    <p class="text-gray-800">${item.il}, ${item.mator}, <span style="color:${item.reng}">${item.reng}</span></p>
                                                </div>
                                            </div>
                                        </div>
                                `);
    }

    cards.innerHTML = kod;
}

