// This is a simple example of Hackathon story for Devpost challenge.

# author: SMZ
# A really short story (v0.1)
# description: ...

VAR hp = 2
LIST deaths = beaten, drown

-> main

=== function is_alive ===
// Condition can be more complex here
~ return hp > 0

=== get_hit(x) ===
~ hp = hp - x
{ is_alive():
    // Everything is alright, continue the story
    ->->
}
// Everything is horribly wrong, redirect the flow to the death knot
-> death(beaten)

=== death(reason) ===
{
- reason ? beaten:
You have been hit by the ultimate computer virus.
- reason ? drown:
Sadly you drowned in the code that overwhelmed you.
- else:
Sorry, you ran out along with your time!
}
-> END

=== main ===
How to handle overwhelming code flow.
You should cross the river where the code flows?
*   [Yes]
    You enter the river but the current of the code is too strong and carries you away.
    -> death(drown)
*   [No]
    Follow the path along the Code River for a while and finally meet a guy with a walking computer.
    When you start talking to him, he throws the computer at you.
    -> get_hit(1) ->
    **  [Fight back]
        You can hit him once before he punches you.
        -> get_hit(RANDOM(0, 2)) ->
        You manage to lock his fist and finally push him into the river of crazed code.
        After this legendary fight, you continue your journey through the codex and never look back.
    **  [Flee]
        You run in desperation for code gone mad and never look back.
    - -> END
    
