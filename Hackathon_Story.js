var storyContent = ﻿{"inkVersion":20,"root":[[{"#":"author: SMZ"},{"#":"A really short story (v0.1)"},{"#":"description: ..."},{"->":"main"},["done",{"#f":5,"#n":"g-0"}],null],"done",{"is_alive":["ev",{"VAR?":"hp"},0,">","/ev","~ret",{"#f":1}],"get_hit":[{"temp=":"x"},"ev",{"VAR?":"hp"},{"VAR?":"x"},"-","/ev",{"VAR=":"hp","re":true},"ev",{"f()":"is_alive"},"/ev",[{"->":".^.b","c":true},{"b":["\n","ev","void","/ev","->->",{"->":".^.^.^.11"},null]}],"nop","\n","ev",{"VAR?":"beaten"},"/ev",{"->":"death"},{"#f":1}],"death":[{"temp=":"reason"},["ev",{"VAR?":"reason"},{"VAR?":"beaten"},"?","/ev",{"->":".^.b","c":true},{"b":["\n","^You have been hit by the ultimate computer virus.","\n",{"->":"death.4"},null]}],["ev",{"VAR?":"reason"},{"VAR?":"drown"},"?","/ev",{"->":".^.b","c":true},{"b":["\n","^Sadly you drowned in the code that overwhelmed you.","\n",{"->":"death.4"},null]}],[{"->":".^.b"},{"b":["\n","^Sorry, you ran out along with your time!","\n",{"->":"death.4"},null]}],"nop","\n","end",{"#f":1}],"main":[["^How to handle overwhelming code flow.","\n","^You should cross the river where the code flows?","\n","ev","str","^Yes","/str","/ev",{"*":".^.c-0","flg":20},"ev","str","^No","/str","/ev",{"*":".^.c-1","flg":20},{"c-0":["\n","^You enter the river but the current of the code is too strong and carries you away.","\n","ev",{"VAR?":"drown"},"/ev",{"->":"death"},{"->":".^.^.g-0"},{"#f":5}],"c-1":["\n","^Follow the path along the Code River for a while and finally meet a guy with a walking computer.","\n","^When you start talking to him, he throws the computer at you.","\n","ev",1,"/ev",{"->t->":"get_hit"},["ev","str","^Fight back","/str","/ev",{"*":".^.c-0","flg":20},"ev","str","^Flee","/str","/ev",{"*":".^.c-1","flg":20},{"c-0":["\n","^You can hit him once before he punches you.","\n","ev",0,2,"rnd","/ev",{"->t->":"get_hit"},"^You manage to lock his fist and finally push him into the river of crazed code.","\n","^After this legendary fight, you continue your journey through the codex and never look back.","\n",{"->":"main.0.g-0"},{"#f":5}],"c-1":["\n","^You run in desperation for code gone mad and never look back.","\n",{"->":"main.0.g-0"},{"#f":5}]}],{"#f":5}],"g-0":["end",{"#f":5}]}],{"#f":1}],"global decl":["ev",2,{"VAR=":"hp"},{"list":{},"origins":["deaths"]},{"VAR=":"deaths"},"/ev","end",null],"#f":1}],"listDefs":{"deaths":{"beaten":1,"drown":2}}};