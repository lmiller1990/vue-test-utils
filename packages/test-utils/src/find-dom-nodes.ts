interface VNode {
  // ...
}

export default function findDOMNodes(
  element: Element | null,
  selector: string
): VNode[] {
  const nodes = []
  if (!element || !element.querySelectorAll || !element.matches) {
    return nodes
  }

  if (element.matches(selector)) {
    nodes.push(element)
  }
  return nodes.concat([].slice.call(element.querySelectorAll(selector)))
}
