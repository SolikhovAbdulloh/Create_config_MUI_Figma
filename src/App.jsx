import { Button, colors, Input, TextField } from "@mui/material";
import React from "react";
import SearchIcon from "@mui/icons-material/Search";
import logo from "../src/img/logo (9).png";
import DehazeIcon from "@mui/icons-material/Dehaze";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import PersonIcon from "@mui/icons-material/Person";
import rus from "../src/img/rus.png"
import InstagramIcon from "@mui/icons-material/Instagram";
import TelegramIcon from "@mui/icons-material/Telegram";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import img1 from "../src/img/product category1.png"
import img2 from "../src/img/product category2.png"
import img3 from "../src/img/product category3.png"
import img4 from "../src/img/product category4.png";
import img5 from "../src/img/product category5.png";
import img6 from "../src/img/product category.png";
import car from '../src/img/car.png'
import b1 from "../src/img/Group 171.png"
import rec1 from "../src/img/Rectangle 12.png";
import rec2 from "../src/img/Rectangle 13.png";
import rec3 from "../src/img/Rectangle 14.png";
import rec4 from "../src/img/Rectangle 15.png";
import rec5 from "../src/img/Rectangle 16.png";
import rec6 from "../src/img/Rectangle 17.png";
import p1 from "../src/img/photo1.png"
function App() {
  return (
    <div className="contiener">
      <header>
        <nav className="flex justify-between items-center">
          <div className="flex items-center gap-6">
            <img src={logo} alt="" />
            <Button sx={{ bgcolor: "background.default" }} variant="contained">
              <DehazeIcon sx={{ width: "22px", height: "18px" }} />
              Каталог
            </Button>
          </div>

          <input
            className="h-9 w-[60%] outline-none rounded-lg border-[2px] border-[solid] p-2  "
            placeholder="Я ищу"
          />

          <div className="flex gap-3 items-center">
            <ShoppingCartIcon />
            <PersonIcon />
          </div>
        </nav>
      </header>
      {/*  */}
      <div className="flex mt-4 justify-between items-center">
        <div className="bg-[grey] p-3 text-white rounded-2xl">
          Динамично. Надежно. Доступно.
        </div>
        <div className="flex items-center gap-1">
          <img src={rus} alt="" />
          Ru
        </div>
        <div className="flex items-center gap-6">
          <p className="font-bold text-base text-[grey]">О компании</p>
          <p className="font-bold text-base text-[grey]">Клиентам</p>
          <p className="font-bold text-base text-[grey]">Сотрудничество</p>
          <p className="font-bold text-base text-[grey]">Контакты</p>
        </div>
        <div className="flex items-center gap-3">
          <TelegramIcon />
          <InstagramIcon />
          <p className="text-base text-orange-500">8 (800) 455-45-11</p>
          <Button
            className="text-white"
            sx={{ bgcolor: "background.default", colors: "background" }}
          >
            <LocalPhoneIcon />
            Заказть звонок
          </Button>
        </div>
      </div>
      {/*  */}

      <div className="bg1 h-96 mt-9"></div>

      <div className="mt-3">
        <p className="text-3xl font-bold text-[grey]">Популярные категории</p>
        <div className="flex justify-between mt-3  items-center">
          <div className="bg-[#F1F1F1]  rounded-lg p-3 justify-center items-center">
            <img className="m-auto" src={img1} />
            <p className="text-[18px] text-center font-bold ">
              Стартеры и <br />
              комплектующие
            </p>
          </div>

          <div className="bg-[#F1F1F1]  rounded-lg p-7 justify-center items-center">
            <img className="m-auto" src={img2} />
            <p className="text-[18px] text-center font-bold ">Термостаты</p>
          </div>

          <div className="bg-[#F1F1F1]  rounded-lg p-3 justify-center items-center">
            <img className="m-auto" src={img3} />
            <p className="text-[18px] text-center font-bold ">
              Стартеры и <br />
              комплектующие
            </p>
          </div>

          <div className="bg-[#F1F1F1]  rounded-lg p-8 justify-center items-center">
            <img className="m-auto" src={img4} />
            <p className="text-[18px] text-center font-bold ">Генераторы</p>
          </div>

          <div className="bg-[#F1F1F1]  rounded-lg p-8 justify-center items-center">
            <img className="m-auto" src={img5} />
            <p className="text-[18px] text-center font-bold ">СВЕТОТЕХНИКА</p>
          </div>

          <div className="bg-[#F1F1F1]  rounded-lg p-5 justify-center items-center">
            <img className="m-auto" src={img6} />
            <p className="text-[18px] text-center font-bold ">
              Стартеры и <br />
              комплектующие
            </p>
          </div>
        </div>
      </div>

      <div className="flex justify-between items-center mt-5">
        <p className="text-3xl font-bold text-[grey]"> Новости </p>
        <Button
          className="text-3xl font-bold"
          sx={{
            color: "colors.main",
            bgcolor: "background.grey",
            borderRadius: "12px",
          }}
        >
          Посмотреть все
        </Button>
      </div>

      <div className="flex justify-between mb-3 items-center">
        <div className="mt-3">
          <img src={car} alt="car" />
          <p className="text-[28px] font-bold">
            Заголовок в две строчки <br />
            или в три строчки
          </p>
          <p className="text-[grey]">28.09.2022</p>
        </div>

        <div className="mt-3">
          <img src={car} alt="car" />
          <p className="text-[28px] text-orange-500 font-bold">
            Заголовок в две строчки <br />
            или в три строчки
          </p>
          <p className="text-[grey]">28.09.2022</p>
        </div>

        <div className="mt-3">
          <img src={car} alt="car" />
          <p className="text-[28px] font-bold">
            Заголовок в две строчки <br />
            или в три строчки
          </p>
          <p className="text-[grey]">28.09.2022</p>
        </div>
      </div>

      <div className="bg1 h-56 rounded-xl mt-9"></div>

      <div className="mt-4">
        <p className="text-3xl flex-col font-bold text-[grey]">
          Автозапчасти к технике
        </p>
        <div className="flex justify-between mt-3 items-center">
          <div className="relative bg-[#6E7191] flex flex-col rounded-xl justify-end p-4 h-[200px] w-[200px]">
            <img src={rec1} className="absolute top-0 right-0" />
            <p className="text-[18px] font-bold">Грузовые</p>
          </div>

          <div className="relative bg-[#6E7191] flex flex-col rounded-xl justify-end p-4 h-[200px] w-[200px]">
            <img src={rec2} className="absolute top-0 right-0" />
            <p className="text-[18px] font-bold">Грузовые</p>
          </div>

          <div className="relative bg-[#6E7191] flex flex-col rounded-xl justify-end p-4 h-[200px] w-[200px]">
            <img src={rec3} className="absolute top-0 right-0" />
            <p className="text-[18px] font-bold">Грузовые</p>
          </div>

          <div className="relative bg-[#6E7191] flex flex-col rounded-xl justify-end p-4 h-[200px] w-[200px]">
            <img src={rec4} className="absolute top-0 right-0" />
            <p className="text-[18px] font-bold">Грузовые</p>
          </div>

          <div className="relative bg-[#6E7191] flex flex-col rounded-xl justify-end p-4 h-[200px] w-[200px]">
            <img src={rec5} className="absolute top-0 right-0" />
            <p className="text-[18px] font-bold">Грузовые</p>
          </div>

          <div className="relative bg-[#6E7191] flex flex-col rounded-xl justify-end p-4 h-[200px] w-[200px]">
            <img src={rec6} className="absolute top-0 right-0" />
            <p className="text-[18px] font-bold">Грузовые</p>
          </div>
        </div>
      </div>

      <div className="mt-4">
        <p className="text-3xl flex-col font-bold text-[grey]">Хиты продаж</p>

        <div className="flex justify-between mt-3 items-center">
          <div className=" flex flex-col justify-between items-start">
            <img className="" src={p1} alt="p1" />
            <span className="flex gap-2 ">
              <p className="text-2xl font-bold">999999 ₽</p>
              <sub className="line-through text-[grey]">222222₽</sub>
            </span>
            <p className="text-[14px] font-normal text-[grey]">
              Фара светодиодная <br /> дополнительная круглая,
              <br /> направленный свет, 14 <br />
              диодов, 42W, (115х42х142)
            </p>
            <br />
            <Button
              sx={{ bgcolor: "background.default", color: "colors.background" }}
            >
              В корзину
            </Button>
          </div>

          <div className=" flex flex-col justify-between items-start">
            <img className="" src={p1} alt="p1" />
            <span className="flex gap-2 ">
              <p className="text-2xl font-bold">999999 ₽</p>
              <sub className="line-through text-[grey]">222222₽</sub>
            </span>
            <p className="text-[14px] font-normal text-[grey]">
              Фара светодиодная <br /> дополнительная круглая,
              <br /> направленный свет, 14 <br />
              диодов, 42W, (115х42х142)
            </p>
            <br />
            <Button
              sx={{ bgcolor: "background.default", color: "colors.background" }}
            >
              В корзину
            </Button>
          </div>
          <div className=" flex flex-col justify-between items-start">
            <img className="" src={p1} alt="p1" />
            <span className="flex gap-2 ">
              <p className="text-2xl font-bold">999999 ₽</p>
              <sub className="line-through text-[grey]">222222₽</sub>
            </span>
            <p className="text-[14px] font-normal text-[grey]">
              Фара светодиодная <br /> дополнительная круглая,
              <br /> направленный свет, 14 <br />
              диодов, 42W, (115х42х142)
            </p>
            <br />
            <Button
              sx={{ bgcolor: "background.default", color: "colors.background" }}
            >
              В корзину
            </Button>
          </div>
          <div className=" flex flex-col justify-between items-start">
            <img className="" src={p1} alt="p1" />
            <span className="flex gap-2 ">
              <p className="text-2xl font-bold">999999 ₽</p>
              <sub className="line-through text-[grey]">222222₽</sub>
            </span>
            <p className="text-[14px] font-normal text-[grey]">
              Фара светодиодная <br /> дополнительная круглая,
              <br /> направленный свет, 14 <br />
              диодов, 42W, (115х42х142)
            </p>
            <br />
            <Button
              sx={{ bgcolor: "background.default", color: "colors.background" }}
            >
              В корзину
            </Button>
          </div>

          <div className=" flex flex-col justify-between items-start">
            <img className="" src={p1} alt="p1" />
            <span className="flex gap-2 ">
              <p className="text-2xl font-bold">999999 ₽</p>
              <sub className="line-through text-[grey]">222222₽</sub>
            </span>
            <p className="text-[14px] font-normal text-[grey]">
              Фара светодиодная <br /> дополнительная круглая,
              <br /> направленный свет, 14 <br />
              диодов, 42W, (115х42х142)
            </p>
            <br />
            <Button
              sx={{ bgcolor: "background.default", color: "colors.background" }}
            >
              В корзину
            </Button>
          </div>
        </div>
      </div>
      <div className="bg1 h-96 mt-9"></div>
      <div className="mt-4 flex  gap-3 items-center">
        <div className="flex justify-between  gap-4 border-[solid] border-[1px] rounded-xl p-3 items-center">
          <img src={b1} alt="" />
          <div className="flex flex-col justify-between">
            <p className="font-bold text-[28px] text-[orange]">Динамично</p>
            <p>
              Мы предлагаем более 15000 <br /> наименований запчастей на все{" "}
              <br /> виды автотранспортных средств, <br /> тракторную и
              сельхозтехнику, <br />
              спецтехнику.
            </p>
          </div>
        </div>

        <div className="flex justify-between gap-4 border-[solid] border-[1px] rounded-xl p-3 items-center">
          <img src={b1} />
          <div className="flex flex-col justify-between">
            <p className="font-bold text-[28px] text-[orange]">Динамично</p>
            <p>
              Мы предлагаем более 15000 <br /> наименований запчастей на все
              <br /> виды автотранспортных средств, <br /> тракторную и
              сельхозтехнику, <br />
              спецтехнику.
            </p>
          </div>
        </div>

        <div className="flex justify-between gap-4 border-[solid] border-[1px] rounded-xl p-3 items-center">
          <img src={b1} alt="" />
          <div className="flex flex-col justify-between">
            <p className="font-bold text-[28px] text-[orange]">Динамично</p>
            <p>
              Мы предлагаем более 15000 <br /> наименований запчастей на все
              <br /> виды автотранспортных средств, <br /> тракторную и
              сельхозтехнику, <br />
              спецтехнику.
            </p>
          </div>
        </div>

        <div className="flex justify-between gap-4 border-[solid] border-[1px] rounded-xl p-3 items-center">
          <img src={b1} alt="" />
          <div className="flex flex-col justify-between">
            <p className="font-bold text-[28px] text-[orange]">Динамично</p>
            <p>
              Мы предлагаем более 15000 <br /> наименований запчастей на все
              <br /> виды автотранспортных средств, <br /> тракторную и
              сельхозтехнику, <br />
              спецтехнику.
            </p>
          </div>
        </div>
      </div>

      <footer className="mt-5 bg-[#F1F1F1] p-4 flex justify-between items-start">
        <div className="flex flex-col gap-5 justify-between items-start">
          <img src={logo} alt="loogo" />
          <p className="text-[12px] font-normal">
            Оптовая продажа запчастей <br /> на все виды автотранспортных
            средств
          </p>
          <p className="text-[12px] font-normal">
            ИП Хомченко Максим Альбертович <br /> ОГРНИП 000000000
          </p>
          <p className="text-[12px] font-normal">1993 - 2022 © АвтоЭлектрика</p>
        </div>

        <div className="flex flex-col gap-5 justify-between items-start">
          <p className="font-semibold text-[16px]">О компании</p>
          <p className="text-[12px] font-normal">Документы и реквизиты</p>
          <p className="text-[12px] font-normal">Сотрудники</p>
          <p className="text-[12px] font-normal">Карьера</p>
        </div>

        <div className="flex flex-col gap-5 justify-between items-start">
          <p className="font-semibold text-[16px]">Клиентам</p>
          <p className="text-[12px] font-normal">Как зарегестрироваться</p>
          <p className="text-[12px] font-normal">Как сделать заказ</p>
          <p className="text-[12px] font-normal">Способы оплаты</p>
          <p className="text-[12px] font-normal">Вопросы и ответы</p>
          <p className="text-[12px] font-normal">Доставка и склад</p>
        </div>

        <div className="flex flex-col gap-5 justify-between items-start">
          <p className="font-semibold text-[16px]">Сотрудничество</p>
        </div>
        <div className="flex flex-col gap-5 justify-between items-start">
          <span className="flex items-center gap-6">
            <TelegramIcon />
            <InstagramIcon />
          </span>
          <p className="font-semibold text-[16px]">
            Время работы <br /> пн. - пт. с 7:30 до 18:00
          </p>
          <p className="font-semibold text-[16px]">
            Телефоны: <br /> 8 (800) 455-55-15 +7 <br />
            (495) 108-54-64
          </p>
        </div>
      </footer>
    </div>
  );
}

//       {/* <Button sx={{ bgcolor: "background.default" }}>send</Button>
//       <Button sx={{ color: "colors.main" }}>send</Button> */}
// }

export default App;
