// ProductDetails.js
const Product = () => {
    const product = {
      name: 'Shiba Inu Sepia',
      price: '34.000.000 VND',
      sku: '#1000078',
      gender: 'Female',
      age: '2 Months',
      size: 'Small',
      color: 'Apricot & Tan',
      vaccinated: 'Yes',
      dewormed: 'Yes',
      cert: 'Yes (MKA)',
      microchip: 'Yes',
      location: 'Vietnam',
      publishedDate: '12-Oct-2022',
      breedInfo: 'Pure breed Shih Tzu',
    };
  
    return (
      <div className="w-full p-4 bg-white rounded-lg shadow-md">
        <h2 className="text-3xl font-bold mb-4">{product.name}</h2>
        <p className="text-xl text-blue-500 font-semibold mb-4">{product.price}</p>
        <button className="bg-blue-500 text-white px-4 py-2 rounded-md mb-4">Contact Us</button>
        <div className="border-t pt-4">
          <p><strong>SKU</strong>: {product.sku}</p>
          <p><strong>Gender</strong>: {product.gender}</p>
          <p><strong>Age</strong>: {product.age}</p>
          <p><strong>Size</strong>: {product.size}</p>
          <p><strong>Color</strong>: {product.color}</p>
          <p><strong>Vaccinated</strong>: {product.vaccinated}</p>
          <p><strong>Dewormed</strong>: {product.dewormed}</p>
          <p><strong>Cert</strong>: {product.cert}</p>
          <p><strong>Microchip</strong>: {product.microchip}</p>
          <p><strong>Location</strong>: {product.location}</p>
          <p><strong>Published Date</strong>: {product.publishedDate}</p>
          <p><strong>Additional Information</strong>: {product.breedInfo}</p>
        </div>
      </div>
    );
  };
  
  export default Product;
  