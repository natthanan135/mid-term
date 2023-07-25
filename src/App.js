import React, { useRef } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Pa from "./Pa";
import Pb from "./Pb";
import Pc from "./Pc";
import Contact from "./Contact";
import { Container, Button, Table } from "react-bootstrap";
import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";

export function Layout() {
  return (
    <nav className="be-secondary p-2 md-3">
      <img str="card-07.jpg" alt="My logo" />
      <NavLink
        to="/"
        className="link px-2"
        style={({ isActive }) => {
          return {
            textDecoration: isActive ? "none" : "underline",
          };
        }}
      >
        หน้าเเรก
      </NavLink>
      <NavLink
        to="/product"
        className="link px-2"
        style={({ isActive }) => {
          return {
            textDecoration: isActive ? "none" : "underline",
          };
        }}
      >
        ตารางเทียบแคลอรี่
      </NavLink>
      <NavLink
        to="/Contact"
        className="link px-2"
        style={({ isActive }) => {
          return {
            textDecoration: isActive ? "none" : "underline",
          };
        }}
      >
        ผู้จัดทํา
      </NavLink>
    </nav>
  );
}

function Index() {
  return (
    <>
      <Layout />
      <div className="text-center">
        <img str="IMG_5991.JPG" alt="อู๋หน่อไม้พุงปลา" />
        <h3>อู๋หน่อไม้พุงปลา</h3>
        <div>
          อุ๋หน่อไม้พุงปลา เป็นอาหารพื้นเมืองที่มีสรรพคุณต่อสุขภาพ
          ตามวิถีภูมิปัญญาท้องถิ่น ของจังหวัดอุบลราชธานี
          ที่ได้สืบทอดกันมารุ่นต่อรุ่น
          มีความโดดเด่นและมีความเป็นเอกลักษณ์ของจังหวัดอุบลราชธานี
          อุ๋เป็นอาหารพื้นเมืองที่มีลักษณะคล้ายแกงอ่อม
          แต่วิธีการทำจะใส่น้ำในปริมาณที่น้อยกว่า ส่วนใหญ่นิยมทำกับพุงปลา
          โดยใช้พุงปลา ซึ่งเป็นปลาธรรมชาติจากลุ่มแม่น้ำโขง
          เนื้อปลามีคุณค่าทางโภชนาการ
        </div>
        <Button onClick={Pa}>เรียนรู้เพิ่มเติม</Button>
      </div>
      <div className="text-center">
        <img str="f0801.jpg" alt="ลาบปลาคัง" />
        <h3>ลาบปลาคัง</h3>
        <div>
          ลาบปลาคัง เป็นอาหารพื้นเมืองที่มีสรรพคุณต่อสุขภาพ
          ตามวิถีภูมิปัญญาท้องถิ่น ของจังหวัดอุบลราชธานี
          ที่ได้สืบทอดกันมารุ่นต่อรุ่น
          มีความโดดเด่นและมีความเป็นเอกลักษณ์ของจังหวัดอุบลราชธานี
          เป็นต้นตำรับเมนูสมุนไพรโบราณที่มีมาช้านานทั้งในเรื่องของรสชาติที่กลมกล่อม
          เครื่องปรุงล้วนเป็นสมุนไพรจากธรรมชาติ
        </div>
        <Button onClick={Pb}>เรียนรู้เพิ่มเติม</Button>
      </div>
      <div className="text-center">
        <img str="f0901.jpg" alt="แกงอ่อมหอยขม" />
        <h3>แกงอ่อมหอยขม</h3>
        <div>
          แกงอ่อมหอยขม เป็นอาหารพื้นเมืองที่มีสรรพคุณต่อสุขภาพ
          ตามวิถีภูมิปัญญาท้องถิ่น ของจังหวัดอุบลราชธานี
          ที่ได้สืบทอดกันมารุ่นต่อรุ่น
          เป็นแกงอ่อมอาหารพื้นเมืองที่อุดมไปด้วยคุณค่าทางโภชนาการเพราะส่วนประกอบหลักส่วนใหญ่เป็นผักและสมุนไพรพื้นบ้านนานาชนิดเป็นความผสมผสานที่ลงตัวระหว่างชนิดของอาหาร
          และเครื่องปรุง มีเสน่ห์ของความเป็นไทย
          ต้นตำรับเมนูสมุนไพรโบราณที่มีมาช้านานของจังหวัดอุบลราชธานี
        </div>
        <Button onClick={Pc}>เรียนรู้เพิ่มเติม</Button>
      </div>
    </>
  );
}

function Product() {
  const table = useRef();
  const tr = useRef([]);
  const DeleteRow = (i) => {
    const index = tr.current[i].rowIndex;
    table.current.DeleteRow(index);
  };

  const data = [
    ["อู๋หน่อไม้พุงปลำ", 1200],
    ["ลำบปลำคัง", 350],
    ["แกงอ่อมหอยขม", 450],
  ];

  return (
    <>
      <Layout />
      <h4>ตารางเทียบแคลอรี่</h4>
      <Table striped bordered hover className="my-3" ref={table}>
        <thead>
          <tr>
            <th>ชื่ออาหาร</th>
            <th>แคลอรี่</th>
            <th>เทียบแคลอรี่</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, i) => {
            return (
              <tr
                ref={(el) => {
                  tr.current[i] = el;
                }}
                ker={i}
              >
                <td>{item[0]}</td>
                <td>{item[1]}</td>
                <td className="text-center">
                  <Button variant="danger" onClick={() => DeleteRow(i)}>
                    เทียบแคลอรี่
                  </Button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Container className="p-3 my-3 bg-ligh">
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/main" element={<Index />} />
          <Route path="/product" element={<Product />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Container>
    </BrowserRouter>
  );
}

export default App;
