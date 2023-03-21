
Website: https://carolkiarie.github.io/dice-roll-game/

This game dice-roll-game has two players. It allows the players to cumulate their scores and the player who gets to 100. The player wins.

To implement the game there were certain logics that had to be considered.

1. The Roll dice button. (
    1. generating a random number. then display the dice images according to the random numbers.
    check if the number is 1 and if it is set the current score to zero. But if it is any other number other than 1 then take the random number and add it to the current score.
    2. Switch the players if a user rolls a number one
    and also set the current score to 0
)
2.The hold button(
    Check if a player has a total of 100 so as to declare them a winner.
    store the current score so that when they roll the dice the previous score and the new score will be added together.
)
3.New game button(
    Reset the scores of the game, restore the classes to initial state
)