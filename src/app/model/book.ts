/**
 * Ein Buch ist was zum Lesen
 */
export interface Book {
  /**
   * Der Titel
   */
  title: string;
  /**
   * Die Person, die das Buch geschrieben hat
   */
  author: string;
  /**
   * Eine Kurzbeschreibung
   */
  abstract?: string;
}
