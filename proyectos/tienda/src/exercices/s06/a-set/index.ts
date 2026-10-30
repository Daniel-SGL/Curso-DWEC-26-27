// Enunciado: Set: sin repetidos y <¿esta?>
// Autor: Daniel Serrano Garcia
// Investigación: Fuentes consultadas
//

// Ejercicio A1 - Etiquetas del blog

export function uniqueTags(posts: string[][]): string[] {
  const tagsSet = new Set<string>(posts.flat());
  return [...tagsSet];
}

// Ejercicio A2 - Votacion

export function firstRepeated(votes: string[]): string | undefined {

  const voteSet = new Set<string>();
  for (const vote of votes) {

    if (voteSet.has(vote)) {
      return vote
    }
    voteSet.add(vote)

  }
  return undefined;

}

// Ejercicio A3 - Canciones en las dos playlist

export function inBoth(a: string[], b: string[]): string[] {

  const bSet = new Set<string>(b);
  const arraySong = [];
  for (const song of a) {
    if (bSet.has(song)) {
      arraySong.push(song);
    }
  }
  return arraySong;

}
