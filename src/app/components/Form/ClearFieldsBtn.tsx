import { ISchedule } from "../Schedule/Schedule.type";

interface ClearFieldsBtnProps {
  lessons: ISchedule[];
  setLessons: React.Dispatch<React.SetStateAction<ISchedule[]>>;
}

export const ClearFieldsBtn: React.FC<ClearFieldsBtnProps> = (
  props: ClearFieldsBtnProps
) => {
  const { lessons, setLessons } = props;

  const handleClearFields = () => {
    const clearedLessons = lessons.map((lesson: ISchedule) => ({
      ...lesson,
      time: "",
      classroom: "",
      subject: "",
    }));
    setLessons(clearedLessons);
  };

  return (
    <button type="button" onClick={handleClearFields}>
      Clear Fields
    </button>
  );
};
