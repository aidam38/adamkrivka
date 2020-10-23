---
title: "Math 1a Explanatory Experiment | Problem set 4"
author: "Adam Křivka"
published: true
date: 2020-10-15
tags: ['Math 1a']
---


Hey everyone, so this is an experiment of me explaining stuff from Ma 1a. To set things straight, I'm also seeing this kind of approach to calculus for the first time, and I'm not particularly smart, or at least not "brain-powerful". I'm just interested in learning, teaching, explaining, ... and better methods of writing stuff on the Internet. I've never pushed myself to actually create something, and this seemed like a fruitful opportunity.

(You are on my unfinished blog; don't bother clicking around.)

Everything here is supposed to be didactic, not rigorous (like in lectures or the book). I'm mainly using my notes to write this. Subject to continuous (with discrete jumps in the first derivative though) improvement.

I might do other stuff for the midterm as well if this turns out good.

# Week 4 content

## Lectures 8, 9, and 10 (needed for pset 4) go roughly like this

- First, we make the **jump from sequences to functions**. That means, we define what a function is, define a limit of a function and prove the squeeze theorem for them. Then, we prove an important lemma that allows us to swap from sequences to functions back-and-forth (the **functions-sequences swapping lemma**).

- Next, we establish the concept of **continuity** and prove the **extreme value theorem** and the **intermediate value theorem**. These provide us a rigorous understand of how functions work, which is going to come handy later, because derivatives $$f'(x)$$, $$f''(x)$$, ... are also just functions.

- Also, we prove that the limit notation behaves as we would expect, first for sequences in the lecture and then for functions in the pset.

- Between lecture 8 and 9, a crucial concept is introduced: **differentiability**. Apart from the classical definition, we learn a new one, using the **differential approximation**, which just means that a function resembles its tangent line near the point of contact.

- It uses this new **Big-O** and **Little-O** notation, which stumped me as well even though I've done some CS stuff. Using all that, we prove all the known **rules of differentiation**. Don't worry if this stuff doesn't make sense in the beginning, I think it didn't to most people as well...

- The fruits are collected in the final lecture, where we stand on the strong legs: **continuity** and **differentiability**. We first define what a maximum and minimum is and then prove probably the two most important theorems: the **Rolle's theorem** and the **mean value theorem**. In practice though, the **first derivative test** and the **second derivative test** are more useful, but their proofs require the two mentioned theorems, which in turn require the stuff from the before (mainly extreme value theorem). The differential approximation is also used in the second derivative test, so you can see how **things "nicely" tie together**.

- _So it's like: lecture 8: these are functions, this is how they work; lecture 9: here's a "handy" Big-O and Little-O notation and a new way to look at differentiability; lecture 10: here's how you *actually* analyze a function's behaviour & how to prove the obvious: that going less than your average speed is nonsense, because then your average speed would be lower._

## What I just said only longer

### Lecture 8

The definition of a **limit of a function** is very important, so here it is, coupled with a few intuitions:

Let $$f$$ be a function defined somewhere around $$x=a$$ (let's say on some $$[a-\delta,\,a+\delta]$$). We say (like "we define") that

- $$\lim_{x\to a}f(x)=L\, ,$$

- if for every $$\varepsilon>0$$, there is a $$\delta$$ so that:

- when $$|x-a|<\delta$$, then $$|f(x)-L|<\varepsilon$$.

- You can think of $$\delta$$ as like the range in $$x$$ and $$\varepsilon$$ in $$y$$.

- Note that I could write this with $$\varepsilon/2$$ or $$\varepsilon/(\text{your mom})$$ and it would still hold. As long as it's linear in $$\varepsilon$$ (don't quote me on this), we can always write $$\varepsilon'=\text{(that wacky thing we came up with)}$$ and we're fine.

For the **squeeze theorem for functions**, I'm just going to say that it's important to note that we're not dealing with $$n\to\infty$$ only! It's more like $$x\to a$$, so picture two functions bullying the third (middle) one at point $$x=a$$, but then going in their own directions (so you actually see the point when all three functions merge, as opposed to just seeing that it happens somewhere in infinty.)

Onto the **functions-sequences swapping lemma**. I'm not gonna do a rigorous proof here, but just give you a strong intuition. Think back to the notations of a limit for a function and for a sequence. They're different! _See, with a sequence, we can only really have $$j\to\infty$$ in the bottom (so "a natural number goes to infinity"), whereas with a function, we can have all sorts of (real-valued) wacky stuff._ Now think of their definitions (the for every something there exists something else.). _They're... similar!_ Do you see how the $$N$$ and $$\delta$$ are playing a similar role? It's gonna be more clear when we see the lemma; it says: 

Suppose $$\lim_{x\to a}f(x)=L$$, then $$\lim_{j\to\infty}f(x_j)=L$$ if $$\lim_{j\to\infty}x_j=a$$.

Here's the intuition: you've already beaten the boss and you've triumphantly found a $$\delta$$ for a cheeky $$\varepsilon$$ you got, so now you know that if you can keep you $$x$$ within $$[a-\delta,\ a+\delta]$$ you will keep beating the boss. But on level 2, the boss says you can't just say that $$x\in[a-\delta,\ a+\delta]$$, you only have a sequence $$x_1,\,x_2,...$$ that converges to $$a$$. Note here that $$x_1,\,x_2, ...$$ became specific values, not something you can "plug something for", like $$x=\text{your dad}$$. Anyway, you retort by saying: "Aha! But I can find an $$N$$ such that all $$x_N,\,x_{N+1}, ...$$ are within the interval $$[a-\delta,\, a+\delta]$$ (so $$\delta$$ here plays the role of $$\varepsilon$$), and when the $$x$$-s are in that interval, I already know I can beat you. Quod erat demonstradum, motherfucker.

(Woops, this is getting long.)

Phew, blablabla... **continuity**! We say ("we give that thing this __label__") function $$f$$ is continuous if and only if (so the "label" is "tightly-knit" with what "it means") $$\lim_{x\to a}f(x)=f(a)$$. Pretty straight forward, huh?

Now, the **extreme value theorem**. I'm not gonna even try to prove it, I'm not even sure I get it myself. 


<details><summary>
I think it goes something like this though (feel free to skip this):
</summary>

* $$f$$ is continuous on $$[a,b]$$ so it can't go fuck off to $$+\infty$$ (nor $$-\infty$$)

- You prove this by contradiction on quantum orbitals energy levels: you conjecture that $$f(x_n)$$ exceeds every energy level $$n$$, whose energy is also just $$n$$, for some $$x_n$$, but since $$\{x_n\}$$ makes a sequence that is bounded by $$[a,b]$$, by the Bolzano-Weistrauss theorem, there must be a bounded subsequence. And then you do the wacky function-sequence swapping (somehow).

- So there's a least upper bound (a "roof" we can plonk on $$f$$). But $$f$$ must touch that "roof" somewhere (it can't like asymptomatically approach it on a closed interval).

- You prove this again by the Bolzano-Weistrauss theorem and the function-sequence swapping, using the sequence $$x_n=M-2^{-n}$$, where $$M$$ is the "roof".

</details>

--

Anyway, just remember the obvious fact, that a squiggle without lifting the pen from $$(a,\,f(a))$$ to $$(b,\,f(b))$$ must at some point be the "highest".

**Intermediate value theorem**: this time, I'm really not gonna prove it (it's done by binary search a.k.a intermediate value peekaboo) and just give you an excercise in mathematical notation, because this is a very easy theorem. It says that the aforementioned squiggle has to be at some point at every "height" from $$f(a)$$ to $$f(b)$$ including. Here's the math jargon:

- Suppose $$f$$ is a continuous function on $$[a,b]$$. 

- $$\forall L:\min(f(a),\,f(b))\leq L\leq \max(f(a),\,f(b))\ \exists c\in[a,\,b]: f(c)=L$$.

- ($$L$$'s the "every height", $$c$$ is where you are in $$[a,\,b]$$ when you're at that height.)

And know we finally come to something that is gonna help you solve the first problem from the pset: **limit laws**... and, I'm not gonna prove them. :D I think the proofs in Calculus for Cranks are pretty readable, and if you keep in mind the intuitions regarding $$\varepsilon$$ I wrote at the start, it should be doable. Just pick the stronger condition on $$|x-a|$$ always. ;-) (I don't really want to post them here due to publishing course material concerns.)

The second proof uses the **triangle inequality**, which was very poorly established in this class I think! I might write about it at length, but now, it should suffice that by looking at $$|x+y|\leq|x|+|y|$$ for a long enough time, you'll probably get it yourself. (Just think that the only time this gives any meaningful information is when $$x$$ and $$y$$ are opposite signs.)

Now would be a good time to tackle the first two problems from the pset (excercise 1 and 2, section 3.1, Calculus for Cranks), here it is (there's also a composite image at the end of the post):

- ![fig](https://firebasestorage.googleapis.com/v0/b/firescript-577a2.appspot.com/o/imgs%2Fapp%2Fnotemap%2FIkbwCRc8e8.png?alt=media&token=542a00ca-0d7c-4808-a0b9-dfad8d3de4d7)

I don't know if we're allow to use the limit laws for sequences in the pset (then you would abuse the function-sequence swapping lemma) or not (then, for the product, you would mimic the proof for sequences, utilizing the extreme value theorem). If anyone happens to ask a TA or something, hit me up, I'll fix it here.

Coffee, dinner, cat, bathroom, ...

### Lecture 9

Okay, we're standing on one leg now (continuity), let's take a look at the second now (differentiability).

But before that, **Big-O** and **Little-o** notation. To not catch you off guard so much, prepare to be confused!

In general, the Big-O and Little-o notation serves us label functions into groups that behave in some way around some point (by "behave" I mean "how quickly they converge to the limit"). Just remember that $$O$$ and $$o$$ are **not functions**! They're just labels (like with saying that something's continuous). 

Here are their rigorous definitions:

- We say that $$f(h)$$ is $$o(g(h))$$  as $$h\to0$$ if and only if $$\lim_{h\to0}\frac{f(h)}{g(h)}=0$$.

- We say that $$f(h)$$ is $$O(g(h))$$ as $$h\to0$$ if there exists a $$\varepsilon>0$$ and $$C>0$$ such that when $$|h|<\varepsilon$$, then $$|f(h)|\leq C|g(h)|$$.

The most notable examples are $$o(h)$$ as $$h\to0$$, which means that the function converges very fast to $$0$$ as $$h\to0$$, and $$O(h)$$, which means that the function converges to $$0$$ as $$h\to0$$ comparably to $$h$$. See for example, that $$O(1)$$ just means that the function converges to zero (the definition becomes equivalent to the definition of a limit around zero).

Here's a list of the most important remarks / intuitions:

- The equality $$f(h)=o(h)$$ or $$f(h)=O(h)$$ doesn't mean that $$f=o$$ or $$f=O$$ (Note that this is a also weird thing to write!). It's just that $$f$$ is of some type or some order, it's a label on $$f$$.

- Both definitions rely heavily on the concept of a limit, $$o(h)$$ on our ability to calculate a limit of some expression and $$O(h)$$ on the definition itself – it's basically a limit with a moving "goalpost", $$\varepsilon=Cg(h)$$.

- Anytime you say that $$\text{something}(h)$$ is $$o(h)$$ or $$O(h)$$ you **have** to say "as $$h\to\text{something}$$"! It's really different if we examine what a thing is doing when $$h\to0$$ or when $$h\to\infty$$.

- Finally, you might think throwing around $$o(h)$$s in $$O(h)$$s in an equation is weird, because it's not clear what do these things say on their own! Well, just imagine some function of that order sitting there and that's it. 

For more insight, see this [pdf](https://services.artofproblemsolving.com/download.php?id=YXR0YWNobWVudHMvZS9lLzRmMDMyMDIzMTk0NGYxYTZlZDEyZWFkNjE0YzU0NTBkYmQ4OTQy&rn=QmlnLU9saXR0bGUtby5wZGY=) from the Art of Problem Solving forum. Credit: Nishka Arora on the discussion on Canvas.

Go tackle the next problem in the pset!

- ![fig](https://firebasestorage.googleapis.com/v0/b/firescript-577a2.appspot.com/o/imgs%2Fapp%2Fnotemap%2FB4ioUvk71T.png?alt=media&token=e58bcae2-0080-4f6a-a322-7160bab07bd2)

Onto the second leg: **differentiability**. The default definition is that a function $$f$$ is differentiable at point $$x$$ if 

$$\lim_{h\to0}\frac{f(x+h)-f(x)}{(x+h)-x}=\lim_{h\to0}\frac{f(x+h)-f(x)}{h}\, ,$$

exists. 

Again, this is only a labeling statement.

Now let's take the **new definition** using the Big-O and Little-o notation. A function $$f$$ is differentaible at point $$x$$ if there exists a $$f'(x)$$ such that

$$f(x+h)=f(x)+hf'(x)+o(h)\, .$$

Meditate on this for a while. Harness the space chakras. 

$$f(x)$$ is the point we're "centering" around. $$f'(x)$$ is (should be) the slope of the tangent line at that point. $$hf'(x)$$ gives vertical distance we travel on the line when we go $$h$$ in either direction. $$o(h)$$ just denotes the error: how much are we below or above the actual value $$f(x+h)$$.

Let's wrap our heads around this another way: algebra!

$$
\begin{aligned}
f(x+h)&=f(x)+hf'(x)+o(h)\, ,\\
f(x+h)-f(x)&=hf'(x)+o(h)\, ,\\
\frac{f(x+h)-f(x)}{h}&=f'(x)+\frac{o(h)}{h}\, .
\end{aligned}
$$

That's nearly identical to the original definition! The term $$\frac{o(h)}{h}$$ vanishes to zero as $$h\to0$$ very quickly, since that's the definition of $$o(h)$$ (it's some function $$g(h)$$ such that $$\lim_{h\to0}\frac{g(h)}{h}=0$$).

So saying that some number $$f'(x)$$ exists is equivalent to saying that the limit $$\lim_{h\to0}\frac{f(x+h)-f(x)}{h}$$, which we set equal to $$f'(x)$$ then, exists.

To quote an anonymous teacher: "Good..."

If differentiability, then continuity. http://www.theproofistrivial.com/

Good...

I don't see much added value by me going over the proofs of the **product, chain, sum, power, quotient and inverse rules** using the differential approximation. I think they're quite digestable, if you understand the equivalency of the two definitions of differentiability. See the lectures or Calculus for Cranks then.

Now you're ready to tackle excercise 5, section 3.2. Now this one gave me quite a bit of headache. I hope pointing out headaches is colab-policy okay... but see that you don't know that $$f(x)$$ is differentiable at $$x=0$$. You're welcome. (DM me if you want hints.)

- ![fig](https://firebasestorage.googleapis.com/v0/b/firescript-577a2.appspot.com/o/imgs%2Fapp%2Fnotemap%2FXTUEDwCxD8.png?alt=media&token=2a595ac4-8f9e-4aac-b0f3-4c092ba6090a)

Friendly reminder to write me feedback, if you've read it all the way until here – a good way to take a break before the final!

### Lecture 10

The only new piece of definitoric knowledge here is the **local maximum** and the **local minimum**. Intuitively, it should be a point from which the function goes either down in both directions or up in both directions. Rigorously:

- Let $$f$$ be a function defined on $$[a,b]$$.

- We proclaim $$c\in(a,b)$$ to be

- a local minimum if there exists a $$\delta$$ such that for every $$x\in(c-\delta,c+\delta)$$, we have $$f(x)\leq f(c)$$, or

- a local maximum if there exists a $$\delta$$ such that for every $$x\in(c-\delta,c+\delta)$$, we have $$f(x)\geq f(c)$$.

Now, we're ready to dive deep into a **shitstorm of theorems and lemmas** using everything we've learned so far.

In fact, let me alter the categorizations a slightly to say that we're going to have **two lemmas**, **two theorems** and **two tests**.

**Lemma 1:** If $$c$$ is a local maximum or a local minimum of $$f$$, then $$f'(c)=0$$. Well, duh, right? Hm, not so fast. Here's a proof:

- Suppose not. Suppose $$f'(c)\neq0$$. 

- Well, it's still differentiable at $$c$$, so

- $$f(x)=f(c)+f'(c)(x-c)+o(x-c)\, ,$$

- as $$x\to c$$. Don't ge weirded out by the $$o(x-c)$$; as $$x\to c$$, $$|x-c|\to0$$, which is just like when $$h\to 0$$.

- And you we're gonna use that $$o(x-c)$$! Remember that that's a function that goes to zero very fast as its argument goes to zero, $$|x-c|\to0$$. We have

- $$\lim_{x\to c}\frac{o(x-c)}{|x-c|}=0\, ,$$

- so for some cheeky $$\varepsilon>0$$, there exists a $$\delta$$ such that when $$|x-c|\leq\delta$$, then $$\frac{o(x-c)}{|x-c|}\leq\varepsilon$$. Since $$f'(c)$$ is just some non-zero number, we take $$\varepsilon=\frac{|f'(c)|}{2}$$ to get (after one algebraic transformation):

- $$|o(x-c)|\leq\frac{f'(c)}{2}{|x-c|}\, .$$

- Let's go back to that differential, with a minor manipulation:

- $$f(x)-f(c)=f'(c)(x-c)+o(x-c)\, .$$

- The second term on the right side is always going to be at most half the first term in magnitude, so the sign of the right side (whether it's positive or negative in total) will be determined solely by the first term. But since $$f'(c)$$ is some non-zero number, then the sign must change at $$x=c$$: $$(x-c)$$ goes from $$<0$$ to $$>0$$ or vice versa. But because $$f(c)$$ is a local maximum or a local minimum, the sign of the left side can't change! That's the definition of a local maximum or minimum (go back to see it if you want to check)! 

- Ergo, contradiction... boom, lightnings, Harry Potter... $$f(c)=0$$.

From now on, $$f$$ will always be a function continuous on $$[a,b]$$ and differentiable on $$(a,b)$$.

**Theorem 1 (Rolle's theorem):**  If $$f(a)=f(b)$$ then there exists a $$c\in(a,b)$$ so that $$f'(c)=0$$. If you throw a paper plane, it must at some point fly horizontally.

Proof (warning, very symbolic):

- By the extreme value theorem, $$f$$ achieves a maximum or minimum (which on that closed interval we call **absolute**).

- If both are at the boundaries (like $$f(a)$$ is the maximum and $$f(b)$$ is the minimum, or vice versa), then $$f$$ must be a flat function, and so $$f'(c)=0$$ everywhere.

- If not, one of them has to be inside the interval $$(a,b)$$, let's say at $$c\in(a,b)$$. By lemma 1, $$f'(c)=0$$.

- ggwp

**Theorem 2 (mean value theorem):** (Recall the asumptions on $$f$$.) There exists a $$c\in(a,b)$$ so that $$f'(c)=\frac{f(b)-f(a)}{b-a}$$.

Proof (by relating to the Rolle's theorem):

- Let $$g(x)=f(x)-\frac{f(b)-f(a)}{b-a}(x-a)$$.

- Obviously, $$g(a)=f(a)$$.

- Also, $$g(b)=f(b)-\frac{f(b)-f(a)}{b-a}(b-a)=f(b)-f(b)+f(a)=f(a)$$.

- So $$g(a)=g(b)$$.

- By Rolle's theorem, there exists a $$c\in(a,b)$$ so that $$g'(c)=0$$.

- We already know the rules of differentiation now, so we can find $$g'(x)$$ like

- $$g'(x)=f'(x)-\frac{f(b)-f(a)}{b-a}\, .$$

- Combined with $$g'(c)=0$$, we have

- $$0=f'(c)-\frac{f(b)-f(a)}{b-a}\, ,$$

- $$f'(c)=\frac{f(b)-f(a)}{b-a}\, .$$

- Done.

You're free to wonder now how obvious these theorems are and how the mean value theorem applies to speeding on ticketed high-ways.

**Lemma 2:** If $$f'(x)>0$$ then $$f$$ is stricly increasing.

In other words:

- $$A: f'(x)>0$$ for all $$x\in(a,b)$$.

- $$B: $$ For all $$y,z\in[a,b]$$ it holds that if $$y<z$$, then $$f(y)<f(z)$$.

If $$A$$, then $$B$$.

Proof (a very mean one):

- Suppose not. Suppose $$A$$ is true but $$B$$ is false (contrapositive I think).

- Suppose there exists $$y,z\in[a,b]$$ for which $$y<z$$ and $$f(y)\geq f(z)$$ at the same time.

- Apply the mean value theorem to $$[y,z]$$. There exists a $$c\in[y,z]$$ such that $$f(c)=\frac{f(z)-f(y)}{z-y}<0$$.

- Since $$A$$ is still true, this is a contradiction.

- So if $$A$$, then $$B$$.

**First derivative test:** The first derivative changes value from positive to negative on a local maximum and from negative to positive on a local minimum. 

In other words, if $$c\in(a,b)$$ and $$f'(c)=0$$, there exists a $$\delta$$ such that

- if

  * for all $$x\in(c-\delta,c)$$, $$f'(x)<0$$, and

  * for all $$x\in(c,c-\delta)$$, $$f'(x)>0$$,

- then $$c$$ is a local minimum, or

- if

  * for all $$x\in(c-\delta,c)$$, $$f'(x)>0$$, and

  * for all $$x\in(c,c-\delta)$$, $$f'(x)<0$$,

- then $$c$$ is a local maximum.

Proof:

- Apply lemma 2 (and it's inverse for a strictly decreasing $$f$$) to everywhere you see $$f'(x)>0$$ or $$f'(x)<0$$. Use the definition for what it means for a function to be strictly decreasing or increasing to relate it to the definition of a local maximum and minimun in the beginning of this section.

- I'm not gonna write out here, it's getting late (i.e. close to pset 4 deadline).

**Second derivative test: ** Suppose $$f'(c)=0$$. If $$f''(c)>0$$, then $$c$$ is a local minimum. If $$f''(c)<0$$, then $$c$$ is a local maximum.

Proof (this is where we actually use the damn differential approximation):

- $$f'(x)$$ is just another function (differentiable at $$c$$! let's say...). Don't discriminate functions with a prime. So

- $$f'(x)=f'(c)+f''(c)(x-c)+o(x-c)\, .$$

- Since $$f'(c)=0$$, we have

- $$f'(x)=f''(c)(x-c)+o(x-c)\, .$$

- We can use the same argument as in lemma 1 to see that the sign of the right will be determined by $$f''(c)(x-c)$$. 

- Depending on the sign of $$f''(c)$$, $$f'(x)$$ will either go from positive to negative or from negative to positive when $$x$$ "crosses" $$c$$ "from the left to right". That flipping of signs is due to the term $$(x-c)$$. 

- So this is equivalent to the first derivative test and the rest is on you.

Finally! Last problem and I can... go do Chem or something.

- ![fig](https://firebasestorage.googleapis.com/v0/b/firescript-577a2.appspot.com/o/imgs%2Fapp%2Fnotemap%2Flr09X9cquk.png?alt=media&token=17f6fb07-65a5-469b-8b96-a2aa547be33d)

# The End

I promised all problems at one place. Here they are:

- part 1

    * excercises 1 and 2, section 3.1

- ![fig](https://firebasestorage.googleapis.com/v0/b/firescript-577a2.appspot.com/o/imgs%2Fapp%2Fnotemap%2FIkbwCRc8e8.png?alt=media&token=542a00ca-0d7c-4808-a0b9-dfad8d3de4d7)

    * excercise 1, section 3.2

- ![fig](https://firebasestorage.googleapis.com/v0/b/firescript-577a2.appspot.com/o/imgs%2Fapp%2Fnotemap%2FB4ioUvk71T.png?alt=media&token=e58bcae2-0080-4f6a-a322-7160bab07bd2)

- part 2

    * excercise 5, section 3.2

- ![fig](https://firebasestorage.googleapis.com/v0/b/firescript-577a2.appspot.com/o/imgs%2Fapp%2Fnotemap%2FXTUEDwCxD8.png?alt=media&token=2a595ac4-8f9e-4aac-b0f3-4c092ba6090a)

    * excercise 2, section 3.3

- ![fig](https://firebasestorage.googleapis.com/v0/b/firescript-577a2.appspot.com/o/imgs%2Fapp%2Fnotemap%2FIkbwCRc8e8.png?alt=media&token=542a00ca-0d7c-4808-a0b9-dfad8d3de4d7)

# If someone read this, please write me, lol, you get a candy.
