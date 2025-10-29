import { useState } from 'react';
import Panel from './Panel.jsx';


export default function Accordion() {
const [activeIndex, setActiveIndex] = useState(0);


return (
<>
<h2>Accordion</h2>
<Panel
title="Panel 1"
isActive={activeIndex === 0}
onShow={() => setActiveIndex(0)}
>
Content for Panel 1.
</Panel>
<Panel
title="Panel 2"
isActive={activeIndex === 1}
onShow={() => setActiveIndex(1)}
>
Content for Panel 2.
</Panel>
</>
);
}