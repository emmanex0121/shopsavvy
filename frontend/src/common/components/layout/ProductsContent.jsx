import CustomButton from "../ui/CustomButton";

const ProductsContent = () => {
  const handleClick = () => {
    alert("Input button clicked!");
  };
  return (
    <div>
      <div className="flex flex-wrap items-center justify-between gap-6">
        <h1 className="text-3xl font-bold">Products</h1>
        <CustomButton value="Create a product" onClick={handleClick} />
      </div>
    </div>
  );
};

export default ProductsContent;
