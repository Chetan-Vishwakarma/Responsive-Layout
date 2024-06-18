import AdvanceForm from "@/components/AdvanceForm";
import BasicForm from "@/components/BasicForm";
import MUIBasicForm from "@/components/MUIBasicForm";
import YupBasicValidationForm from "@/components/YupBasicValidationForm";

export default async function Home() {
  return (
    <div>
      {/* <BasicForm/> */}
      {/* <MUIBasicForm/> */}
      {/* <YupBasicValidationForm/> */}
      <AdvanceForm/>
    </div>
  );
}