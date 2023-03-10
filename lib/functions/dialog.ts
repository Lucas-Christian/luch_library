export function openDialog() {
  let dialog = document.getElementById("dialog") as HTMLDialogElement;
  try {
    dialog.show();
  } catch(error: any) {
    try {
      dialog.showModal();
    } catch(err: any) {
      console.log(`Não foi possível abrir o modal, erro:\n ${err}`);
    }
  }
}