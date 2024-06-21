import { ISchedule } from "../Schedule/Schedule.type";

interface DeleteLessonBtnProps {
  lessons: ISchedule[];
  setLessons: React.Dispatch<React.SetStateAction<ISchedule[]>>;
  index: number; // добавляем свойство index
}

export const DeleteLessonBtn: React.FC<DeleteLessonBtnProps> = (
  props: DeleteLessonBtnProps
) => {
  const { lessons, setLessons, index } = props;

  const handleDeleteLessonBtn = () => {
    const updatedLessons = lessons.filter((lesson, i) => i !== index);
    setLessons(updatedLessons);
  };

  return (
    <button type="button" onClick={handleDeleteLessonBtn}>
      Delete Lesson
    </button>
  );
};
