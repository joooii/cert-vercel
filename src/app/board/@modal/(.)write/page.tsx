import NewPageModal from "@/components/write/CCNewPageModal";
import WriteForm from "@/components/write/CCWriteForm";
export default function WriteModalPage() {
  return (
    <NewPageModal>
      <WriteForm type="board" />
    </NewPageModal>
  );
}
