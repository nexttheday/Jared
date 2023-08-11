// Класс функционала сайта
class settings {
  constructor(options) {
    this.Balls = 0; // Какое кол-во баллов у пользователя
  }

  ActiveClickFire() { // Если была нажата кнопка
    if (this.Balls < 10) {
      this.Balls++;
      document.getElementById("Text_Balls").innerHTML = this.Balls;
      console.log(this.Balls)
    } else {
      this.Balls = 0;
      document.getElementById("Text_Balls").innerHTML = this.Balls;
    }
  };

};

let setting = new settings(); // Создаем объект настроек для приложения


function ControlInJS(cmd) {
  if (cmd == "ActiveFireClick") { // Если выбрана кнпока "Добавить приложение в избранное"
    setting.ActiveClickFire();
  };
};
