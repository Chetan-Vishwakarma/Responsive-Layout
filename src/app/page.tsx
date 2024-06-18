import AdvanceForm from "@/components/AdvanceForm";
import BasicForm from "@/components/BasicForm";
import MUIBasicForm from "@/components/MUIBasicForm";
import YupBasicValidationForm from "@/components/YupBasicValidationForm";

export default async function Home() {
  return (
    <div style={{backgroundImage: 'linear-gradient(to top, #a8edea 0%, #fed6e3 100%)'}}>
      {/* <BasicForm/> */}
      {/* <MUIBasicForm/> */}
      {/* <YupBasicValidationForm/> */}
      <AdvanceForm/>
    </div>
  );
}