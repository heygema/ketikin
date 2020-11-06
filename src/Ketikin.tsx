import { useState, useEffect, useRef, ReactElement } from "react";

type Props = {
  children: (value: string) => ReactElement;
  text: string;
  texts?: string[];
  interval?: number;
};

export default function Ketikin({ children, text = '', texts, interval }: Props) {
  let [val, setVal] = useState("");
  // NOTE: typeState -> TYPE | DELETE
  let [typeState, setTypeState] = useState("TYPE");
  let [index, setIndex] = useState(0);
  let [queue, setQueue] = useState(0);
  let timeout: React.MutableRefObject<NodeJS.Timeout | null> = useRef(null);

  function typeIn(input: string) {
    setVal(val + input);
    setIndex(index + 1);
  }

  function typeOut() {
    setVal(val.slice(0, -1));
    setIndex(index - 1);
  }

  function effectForText() {
    timeout.current = setTimeout(() => {
      if (val.length === 1) {
        setTypeState("TYPE");
      } else if (val.length === text.length - 1) {
        setTypeState("DELETE");
      }

      switch (typeState) {
        case "DELETE": {
          typeOut();
          break;
        }
        default: {
          typeIn(text[index]);
          break;
        }
      }
    }, interval || 0);
    return () => {
      timeout.current && clearTimeout(timeout.current);
    };
  }

  function effectForTexts() {
    if (queue === (texts || []).length) {
      setQueue(0);
    }
    let toType = (texts && texts[queue]) || "";
    timeout.current = setTimeout(() => {
      if (val.length === 1) {
        setTypeState("TYPE");
      } else if (val.length === toType.length - 1) {
        setTypeState("DELETE");
      }
      switch (typeState) {
        case "DELETE": {
          if (index === 1) {
            setQueue(queue + 1);
          }
          typeOut();
          break;
        }
        default: {
          typeIn(toType[index]);
          break;
        }
      }
    }, interval || 0);
    return () => {
      timeout.current && clearTimeout(timeout.current);
    };
  }

  useEffect(texts && texts.length > 0 ? effectForTexts : effectForText);

  return children(val);
}
