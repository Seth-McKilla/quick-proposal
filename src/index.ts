import {
  QMainWindow,
  QInputDialog,
  QPushButton,
  InputMode,
} from "@nodegui/nodegui";

const win = new QMainWindow();

const button = new QPushButton();
button.setText("Click me");
button.addEventListener("clicked", () => {
  console.log("the button was clicked");
});

const input = new QInputDialog();
input.setLabelText("Project Name");
input.setInputMode(InputMode.TextInput);
input.setTextValue("");
input.setOkButtonText("Create");
input.setCancelButtonText("Cancel");
input.addEventListener("accepted", () => {
  console.log(input.textValue());
});

win.setWindowTitle("Proposal Creation Wizard");
win.setCentralWidget(button);
win.setCentralWidget(input);
win.show();
(global as any).win = win;
