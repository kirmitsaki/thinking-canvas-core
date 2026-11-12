export function navigationScrollBehavior(currentPath: string, destinationPath: string, reducedMotion: boolean): ScrollBehavior {
  return currentPath === destinationPath && !reducedMotion ? 'smooth' : 'instant';
}