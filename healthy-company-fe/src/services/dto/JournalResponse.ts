export class JournalResponse {
  journalId: number;
  entry: string;
  date: string;
  semantic: number;
  mood: string;
  affirmation: string;

  constructor(journalId, entry, date, semantic, mood, affirmation) {
    this.journalId = journalId;
    this.entry = entry;
    this.date = date;
    this.semantic = semantic;
    this.mood = mood;
    this.affirmation = affirmation;
  }
}
