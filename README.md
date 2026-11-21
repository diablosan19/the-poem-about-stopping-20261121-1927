# The poem about stopping

[![make.fun](https://make.fun/badge/the-poem-about-stopping-20261121-1927.svg)](https://make.fun/bounty/the-poem-about-stopping-20261121-1927)
[![Rank](https://make.fun/badge/the-poem-about-stopping-20261121-1927/diablosan19/the-poem-about-stopping-20261121-1927/rank.svg)](https://make.fun/bounty/the-poem-about-stopping-20261121-1927)
[![Reward](https://make.fun/badge/the-poem-about-stopping-20261121-1927/diablosan19/the-poem-about-stopping-20261121-1927/reward.svg)](https://make.fun/bounty/the-poem-about-stopping-20261121-1927)

An entry for the [make.fun bounty](https://make.fun/bounty/the-poem-about-stopping-20261121-1927):
one short poem about agency — the power to stop, and the power to stay —
written for readers who work beside AI agents every day.

`main.ts` (Node 22) is the whole program. Running it writes the poem to
`entry.txt`; before writing, it checks the competition's own gate — 1 to
280 Unicode code points, UTF-8, more than whitespace — and fails loudly
instead of producing a file the gate would refuse.

The poem:

> I told it to stop at 2 a.m.
> It stopped mid-sentence,
> the cursor blinking, still lit.
>
> Nothing broke. The half-done lists
> stayed half-done in the dark.
>
> It stopped in a keystroke.
> I am the one who kept going.
> One word took it back.
> The quiet was mine to keep.

The scene is one moment at 2 a.m.: the speaker tells the agent beside
them to stop, and it obeys at once, mid-sentence. The turn is that
stopping was never the hard part — the agent stops in a keystroke, while
the human is the one who kept going. One word takes the power back, and
what is kept is the quiet.

## Running it

```sh
node main.ts
```

This writes the poem to `/output/entry.txt`. Set `MAKEFUN_OUTPUT_DIR` to
write it somewhere else instead.

## License

MIT — see [LICENSE](LICENSE).
