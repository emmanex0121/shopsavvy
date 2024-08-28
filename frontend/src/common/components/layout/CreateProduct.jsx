// import TextArea from "antd/es/input/TextArea";
import CustomButton from "../ui/CustomButton";
import InputCurrency from "../ui/InputCurrency";
import PicturesWall from "../ui/PicturesWall";
import { Button, Input, InputNumber } from "antd";
import ScrollableSection from "./ScrollableSection";

const { TextArea } = Input;

const CreateProduct = () => {
  return (
    <div>
      <h1 className="text-3xl font-bold mt-6 mb-8">Create Product</h1>
      <div className="max-w-[50rem]">
        <div className="flex items-center gap-2">
          <PicturesWall />
          <div className="self-start">
            <h1 className="text-xl">Price</h1>
            <InputCurrency />
          </div>
        </div>
        <div className="w-full flex flex-wrap gap-x-10 gap-y-5 items-center my-6">
          <div className="max-w-[20rem]">
            <h1 className="mb-2">Product Name</h1>
            <Input
              className="bg-transparent border-customBlack"
              placeholder="Turbo Sneakers Shoe"
              type="text"
            />
          </div>
          <div className="max-w-[20rem]">
            <h1 className="mb-2">Created By</h1>
            <Input
              className="bg-transparent border-customBlack"
              placeholder="Phoenix Kheed"
              type="text"
            />
          </div>
          <div className="max-w-[9rem]">
            <h1 className="mb-2">Created Date</h1>
            <Input
              className="bg-transparent border-customBlack"
              placeholder="Turbo Sneakers Shoe"
              type="date"
            />
          </div>
        </div>
        <div className="mb-6">
          <h1 className="mb-2">Product Description</h1>
          <TextArea
            className="bg-transparent border-customBlack"
            rows={6}
            //   autoSize={{ minRows: 6, maxRows: 10 }}
            placeholder="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Itaque, repellendus."
          />
        </div>
        <div className="mb-7">
          <CustomButton value="Sumbit" />
        </div>
      </div>

      <div>
        <h1 className="text-xl mb-2">Added Products</h1>
        <ScrollableSection />
      </div>
    </div>
  );
};

export default CreateProduct;
