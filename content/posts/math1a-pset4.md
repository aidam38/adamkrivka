---
title: "Math 1a Explanatory Experiment | Problem set 4"
author: "Adam Křivka"
published: true
date: 2020-10-15
tags: ['Math 1a']
---

Hey everyone, so this is an experiment of me explaining stuff from Ma 1a. To set things straight, I'm also seeing this kind of approach to calculus for the first time, and I'm not particularly smart, or at least not "brain-powerful". I'm just interested in learning, teaching, explaining, ... and better methods of writing stuff on the Internet. (I hate the pdf with a burning passion.) I've never pushed myself to actually create something, and this spontaneous idea, which I got after hearing how much are people struggling with Ma 1a, is supposed to change that.

(This is my unfinished blog, so don't bother clicking around.)

Everything here is supposed to be didactic, not rigorous (like in lectures or the book). I'm mainly using my notes to write this. Subject to continuous (with discrete jumps in the first derivative though) improvement.

I might do other stuff for the midterm as well if this turns out good.

# Top-bottom view Week 4 content

## Lectures 8, 9, and 10 (needed for pset 4) go roughly like this

- First, we make the jump from sequences to functions. That means, we define what a function is, define a limit of a function and prove the squeeze theorem for them. Then, we prove an important lemma that allows us to swap from sequences to functions back-and-forth.

- Next, we establish the concept of continuity and prove the extreme value theorem and the intermediate value theorem. These provide us a rigorous understand of how functions work, which is going to come handy later, because derivatives $$f'(x)$$, $$f''(x)$$, ... are also just functions.

- Also, we prove that the limit notation behaves as we would expect, first for sequences in the lecture and then for functions in the pset. (I'm not sure here, if we're allowed to use the former to prove the latter, but it's possible to mimic the proof of the former in Calculus for Cranks using the extreme value theorem.)

- Between lecture 8 and 9, a crucial concept is introduced: differentiability. Apart from the classical definition, there is a new one, which is used more than the classical one – the differential approximation, which just means that a function resembles its tangent line near the point of contact.

- It uses this new Big-O and Little-O notation, which stumped me as well even though I've done some CS stuff. Using all that, we prove all the known rules of differentiation. Don't worry if this stuff doesn't make sense in the beginning, I think it didn't to most people as well...

- The fruits are collected in the final lecture, where we first define what a maximum and minimum is and then go on to prove probably the most important two theorems: the Rolle's theorem and the mean value theorem. In practice though, the first derivative test and the second derivative test are more useful, but their proofs require the two mentioned theorems, which require the stuff from the first lecture (mainly extreme value theorem). The differential approximation is also used in the second derivative test, so you can see how things "nicely" tie together.

- So it's like: lecture 8: these are functions, this is how they work; lecture 9: here's a "handy" Big-O and Little-O notation and a new way to look at differentiability; lecture 10: here's how you *actually* analyze a functions behaviour & how to prove the obvious, that going less than your average speed is nonsense, because then your average speed would be lower.

## What I just said only longer

- The definition of a limit of a function is important so here it is, coupled with a few intuitions.

- Let $$f$$ be a function defined somewhere around $$x=a$$ (let's say on some $$[a-\delta,\,a+\delta]$$). We say (like "we define") that

- $$\lim_{x\to a}f(x)=L\, ,$$

- if for every $$\varepsilon>0$$, there is a $$\delta$$ so that:

- when $$|x-a|<\delta$$, then $$|f(x)-L|<\varepsilon$$.

- You can think of $$\delta$$ as like the range in $$x$$ and $$\varepsilon$$ in $$y$$.

- Note that I could write this with $$\varepsilon/2$$ or $$\varepsilon/(\text{your mom})$$ and it would still hold. As long as it's linear in $$\varepsilon$$ (don't quote me on this), we can always write $$\varepsilon'=\text{(that wacky thing we came up with)}$$ and we're fine.

For the squeeze theorem for functions, I'm just going to say that it's important to note that we're not dealing with $$n\to\infty$$ only! It's more like $$x\to a$$, so picture two functions bullying the third (middle) one at point $$x=a$$, but then going in their own directions (so you actually see the point when all three functions merge, as opposed to just seeing that it happens somewhere in infinty.)

Onto the **functions-sequences swapping lemma**. I'm not gonna do a rigorous proof here, but just give you a strong intuition. Think back to the notations of a limit for a function and for a sequence. They're different! See, with a sequence, we can only really have $$j\to\infty$$ in the bottom (so "a natural number goes to infinity"), where as with a function, we can have all sorts of (real-valued) wacky stuff. Now think of their definitions (the for every something there exists something else.). They're... similar! Do you see how the $$N$$ and $$\delta$$ are playing a similar role? It's gonna be more clear when we see the lemma; it says: 

- Suppose $$\lim_{x\to a}f(x)=L$$, then $$\lim_{j\to\infty}f(x_j)=L$$ if $$\lim_{j\to\infty}x_j=a$$.

Here's the intuition: you've already beaten the boss and you've triumphantly found a $$\delta$$ for a cheeky $$\varepsilon$$ you got, so now you know that if you can keep you $$x$$ within $$[a-\delta,\ a+\delta]$$ you will keep beating the boss. But on level 2, the boss says you can't just say that $$x\in[a-\delta,\ a+\delta]$$, you only have a sequence $$x_1,\,x_2,...$$ that converges to $$a$$. Note here that $$x_1,\,x_2, ...$$ became specific values, not something you can "plug something for", like $$x=\text{your dad}$$. Anyway, you retort by saying: "Aha! But I can find an $$N$$ such that all $$x_N,\,x_{N+1}, ...$$ are within the interval $$[a-\delta,\, a+\delta]$$ (so $$\delta$$ here plays the role of $$\varepsilon$$), and when the $$x$$-s are in that interval, I already know I can beat you. Quod erat demonstradum, motherfucker.

(Woops, this is getting long.)

Phew, blablabla... continuity! We say ("we give that thing this label") function $$f$$ is continuous if and only if (so the "label" is "tightly-knit" with what "it means") $$\lim_{x\to a}f(x)=f(a)$$. Pretty straight forward, huh?

Now, the extreme value theorem. I'm not gonna even try to prove it, I'm not even sure I get it myself. I think it goes something like this though:

- $$f$$ is continuous on $$[a,b]$$ so it can't go fuck off to $$+\infty$$ (nor $$-\infty$$)

- You prove this by contradiction on quantum orbitals energy levels: you conjecture that $$f(x_n)$$ exceeds every energy level $$n$$, whose energy is also just $$n$$, for some $$x_n$$, but since $$\{x_n\}$$ makes a sequence that is bounded by $$[a,b]$$, by the Bolzano-Weistrauss theorem, there must be a bounded subsequence. And then you do the wacky function-sequence swapping (somehow).

- So there's a least upper bound (a "roof" we can plonk on $$f$$). But $$f$$ must touch that "roof" somewhere (it can't like asymptomatically approach it on a closed interval).

- You prove this again by the Bolzano-Weistrauss theorem and the function-sequence swapping, using the sequence $$x_n=M-2^{-n}$$, where $$M$$ is the "roof".

Anyway, just remember the obvious fact, that a squiggle without lifting the pen from $$(a,\,f(a))$$ to $$(b,\,f(b))$$ must at some point be the "highest".

Intermediate value theorem: this time, I'm really not gonna prove it (it's done by binary search a.k.a intermediate value peekaboo) and just give you an excercise in mathematical notation, because this is a very easy theorem. It says that the aforementioned squiggle has to be at some point at every "height" from $$f(a)$$ to $$f(b)$$ including. Here's the math jargon:

- Suppose $$f$$ is a continuous function on $$[a,b]$$. 

- $$\forall L:\min(f(a),\,f(b))\leq L\leq \max(f(a),\,f(b))\rightarrow \exists c\in[a,\,b]: f(c)=L$$.

- ($$L$$'s the "every height", $$c$$ is where you are in $$[a,\,b]$$ when you're at that height.)

And know we finally come to something that is gonna help you solve the first problem from the pset: limit laws... and, I'm not gonna prove them. :D I think the proof in Calculus for Cranks are pretty readable, and if you keep in mind the intuitions regarding $$\varepsilon$$ I wrote at the start, it should be doable. Just pick the stronger condition on $$|x-a|$$ always. ;-) Here's a screenshot for your convenience:

- ![](https://firebasestorage.googleapis.com/v0/b/firescript-577a2.appspot.com/o/imgs%2Fapp%2Fnotemap%2Fj19ZA3xmFD.png?alt=media&token=72766beb-7bcf-4b29-8a3e-e24bf6441f0f)

- ![](https://firebasestorage.googleapis.com/v0/b/firescript-577a2.appspot.com/o/imgs%2Fapp%2Fnotemap%2FC1cW3Dw1Y5.png?alt=media&token=eb5ed767-3007-437f-a422-8a0bbc9e1f40)

The second proof uses the triangle inequality, which was very poorly established in this class I think! I might write about it at length, but now, it must suffice that by looking at $$|x+y|\leq|x|+|y|$$ for a long enough time, you'll get it yourself. (Just think the only time this gives any meaningful information is when $$x$$ and $$y$$ are opposite signs.)

I don't know if we're allow to use the limit laws for sequences in the pset (then you would abuse the function-sequence swapping lemma) or not (then, for the product, you would mimic the proof for sequences, utilizing the extreme value theorem). If anyone happens to ask a TA or something, hit me up, I'll fix it here.

Coffee, dinner, cat, bathroom, ...

Okay, we're standing on one leg now (continuity), let's take a look at the second now (differentiability).

hm, I might just publish this, people won't read up to here very fast... if you see this, WIP!

[site](https://services.artofproblemsolving.com/download.php?id=YXR0YWNobWVudHMvZS9lLzRmMDMyMDIzMTk0NGYxYTZlZDEyZWFkNjE0YzU0NTBkYmQ4OTQy&rn=QmlnLU9saXR0bGUtby5wZGY=)

Nishka Arora

I will go into depth later, but here's the basic intuition you should get:

- The equality $$f(h)=o(h)$$ or $$f(h)=O(h)$$ doesn't mean that $$f=o$$ or $$f=O$$ (Note that this is a also weird thing to write!), it's just that $$f$$ is of some type or some order.

- Both definitions rely heavily on the concept of a limit, $$o(h)$$ on our ability to calculate a limit of some expression and $$O(h)$$ on the definition itself – it's basic a limit with a moving "goalpost", $$\varepsilon$$.

- Anytime you say $$o(h)$$ or $$O(h)$$ you **have** to say "as $$h\to\text{something}$$! It's really different if we examing what a thing is doing when $$h\to0$$ or when $$h\to\infty$$.

- Finally, you might think throwing around $$o(h)$$s in $$O(h)$$s in an equation is weird, because it's not clear what do these things say on their own. Well, just imagine some function of that order sitting there. 


