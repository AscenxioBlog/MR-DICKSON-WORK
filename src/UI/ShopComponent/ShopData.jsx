import glucose from './ShopPictures/glucose.jpg';
import gloves from './ShopPictures/gloves.jpg';
import plant from './ShopPictures/plant.jpg';
import digital from './ShopPictures/shop4.jpg';
import sethoscope from './ShopPictures/shop5.jpg';
import sphygmomanometer from './ShopPictures/shop6.jpg';
import sphygmomanometer2 from './ShopPictures/shop7.jpg';
import handgloves from './ShopPictures/shop8.jpg';
import sphygmomanometer3 from './ShopPictures/shop9.jpg';
import glucometer from './ShopPictures/shop10.jpg';
import oxygen from './ShopPictures/shop11.jpg';
import surgical from './ShopPictures/shop12.jpg';
import ShopComponent2 from './ShopComponent2';
import HomeComponent16 from '../HomeComponent/HomeComponent16';

function ShopData() {
    const data = [
        {
            id: 'Glucose monitoring',
            price: '46.00',
            rating: '4',
            image: glucose,
            sku: 'PROD001'
        },
        {
            id: 'Single hand gloves',
            price: '58.10',
            rating: '4',
            image: gloves,
            sku: 'PROD002'
        },
        {
            id: 'Pharmaceutical plants',
            price: '88.00',
            rating: '3',
            image: plant,
            sku: 'PROD003'
        },
        {
            id: 'Sethoscope superb',
            price: '96.00',
            rating: '4',
            image: sethoscope,
            sku: 'PROD004'
        },
        {
            id: 'Sphygmomanometer ECO',
            price: '69.00',
            rating: '4',
            image: sphygmomanometer,
            sku: 'PROD005'
        },
        {
            id: 'Sphygmomanometer LEO',
            price: '70.00',
            rating: '3',
            image: sphygmomanometer2,
            sku: 'PROD006'
        },
        {
            id: 'Hand gloves',
            price: '52.00',
            rating: '4',
            image: handgloves,
            sku: 'PROD007'
        },
        {
            id: 'Sphygmomanometer',
            price: '66.00',
            rating: '4',
            image: sphygmomanometer3,
            sku: 'PROD008'
        },
        {
            id: 'Digital thermometer',
            price: '70.00',
            rating: '4',
            image: digital,
            sku: 'PROD009'
        },
        {
            id: 'Glucometer',
            price: '85.00',
            rating: '4',
            image: glucometer,
            sku: 'PROD010'
        },
        {
            id: 'Oxygen breathing machine',
            price: '85.00',
            rating: '4',
            image: oxygen,
            sku: 'PROD011'
        },
        {
            id: 'Surgical latex glove',
            price: '90.00',
            rating: '4',
            image: surgical,
            sku: 'PROD012'
        }
    ];

    return (
        <div className="bg-gray-50">
            <ShopComponent2 data={data} />
            {/* <HomeComponent16 file={data} /> */}
        </div>
    );
}

export default ShopData;