import { useAppSelector } from "@/app/store/hooks";
// import { RootState } from "@reduxjs/toolkit/query";
import { RootState } from "../../store/store";
import { ISchedule } from "./Schedule.type";

export const ScheduleList = () => {
  const { day, list, listStatus } = useAppSelector(
    (state: RootState) => state.user
  );

  console.log("День", day);
  console.log("Список", list);
  console.log("Статус", listStatus);

  return (
    <ul>
      {list.map((schedule: ISchedule) => (
        <li key={schedule.id}>
          <div>
            <h2>{day}</h2>
            <ul>
              <li>
                <ul>
                  <li>{schedule.subject}</li>
                  <li>{schedule.time}</li>
                  <li>{schedule.classroom}</li>
                </ul>
              </li>
            </ul>
          </div>
        </li>
      ))}
    </ul>
    // <ul>
    //   <li>
    //     <div>
    //       <h2>Понедельник</h2>
    //       <ul>
    //         <li>
    //           <ul>
    //             <li>1 пара</li>
    //             <li>9:00</li>
    //             <li>ауд. 15</li>
    //             <li>Русский</li>
    //           </ul>
    //         </li>

    //         <ul>
    //           <li>2 пара</li>
    //           <li>10:20</li>
    //           <li>ауд. 15</li>
    //           <li>Экономика</li>
    //         </ul>

    //         <ul>
    //           <li>3 пара</li>
    //           <li>11:40</li>
    //           <li>ауд. 15</li>
    //           <li>Математика</li>
    //         </ul>
    //       </ul>
    //     </div>
    //   </li>

    //   <li>
    //     <div>
    //       <h2>Понедельник</h2>
    //       <ul>
    //         <li>
    //           <ul>
    //             <li>1 пара</li>
    //             <li>9:00</li>
    //             <li>ауд. 15</li>
    //             <li>Русский</li>
    //           </ul>
    //         </li>

    //         <ul>
    //           <li>2 пара</li>
    //           <li>10:20</li>
    //           <li>ауд. 15</li>
    //           <li>Экономика</li>
    //         </ul>

    //         <ul>
    //           <li>3 пара</li>
    //           <li>11:40</li>
    //           <li>ауд. 15</li>
    //           <li>Математика</li>
    //         </ul>
    //       </ul>
    //     </div>
    //   </li>

    //   <li>
    //     <div>
    //       <h2>Понедельник</h2>
    //       <ul>
    //         <li>
    //           <ul>
    //             <li>1 пара</li>
    //             <li>9:00</li>
    //             <li>ауд. 15</li>
    //             <li>Русский</li>
    //           </ul>
    //         </li>

    //         <ul>
    //           <li>2 пара</li>
    //           <li>10:20</li>
    //           <li>ауд. 15</li>
    //           <li>Экономика</li>
    //         </ul>

    //         <ul>
    //           <li>3 пара</li>
    //           <li>11:40</li>
    //           <li>ауд. 15</li>
    //           <li>Математика</li>
    //         </ul>
    //       </ul>
    //     </div>
    //   </li>
    // </ul>
  );
};
