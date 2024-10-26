const categories = [
    { img: 'path/to/Pet_1.png', title: 'Dog Food' },
    { img: 'path/to/Pet_2.png', title: 'Rabbit Food' },
    { img: 'path/to/Pet_3.png', title: 'Cat Food' },
    { img: 'path/to/Pet_4.png', title: 'Bird Food' },
  ];
  
  const Category = () => {
    return (
      <section id="category" className="py-16">
        <h1 className="text-2xl font-bold text-center">Pet food by category</h1>
        <div className="flex flex-wrap justify-center">
          {categories.map((category, index) => (
            <div key={index} className="m-4 w-1/4 text-center">
              <img src={category.img} alt={category.title} className="w-full h-auto" />
              <h3 className="font-semibold">{category.title}</h3>
              <a href="#" className="mt-2 bg-blue-500 text-white px-4 py-2 rounded">Buy now</a>
            </div>
          ))}
        </div>
      </section>
    );
  };
  
  export default Category;
  