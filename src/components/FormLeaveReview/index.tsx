import { MyComponent } from "../ReactStars";

const FormLeaveReview = () => {
  return (
    <>
      <div className="w-140 h-90 text-center">
        <h2 className="font-medium text-[1.2rem]">Написати відгук</h2>
        <hr className="h-1 border-gray-200 mt-2 mb-2" />
        <h2 className="text-center">Рейтинг</h2>
        <MyComponent />
      </div>
    </>
  );
};

export default FormLeaveReview;
