import type { Category } from "@/types/category";
import type { StudyRecord } from "@/types/studyRecord";

export const addStudyRecord = (
  records: StudyRecord[],
  newRecord: StudyRecord
): StudyRecord[] => {
  const newRecords = [...records, newRecord];
  return newRecords;
};

export const filterByCategory = (
  records: StudyRecord[],
  category: Category,
): StudyRecord[] => {
  const filterRecords = records.filter((record) => record.category === category);
  return filterRecords;
};

export const findById = (
  records: StudyRecord[],
  id: string
): StudyRecord | undefined => {
  const findRecord = records.find((record) => record.id === id);
  return findRecord;
};

export const getTotalMinutes = (
  records: StudyRecord[]
): number => {
  return records.reduce((total, record) => total + record.minutes, 0);
};