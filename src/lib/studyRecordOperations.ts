import type { Category } from "@/types/category";
import type { StudyRecord } from "@/types/studyRecord";

export const addStudyRecord = (
  records: StudyRecord[],
  newRecord: StudyRecord
): StudyRecord[] => {
  const newRecords = [...records, newRecord];
  return newRecords;
}

export const filterByCategory = (
  records: StudyRecord[],
  category: Category,
): StudyRecord[] => {
  const filterRecords = records.filter((record) => record.category === category);
  return filterRecords;
}