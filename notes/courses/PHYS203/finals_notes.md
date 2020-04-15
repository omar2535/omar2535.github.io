# Final exam review material

## Boltzman factor

$$e^{-\beta E}$$

Probability a system will occur in a given state is proportional to the **Boltzman factor**

## The Partition function

$$Z(T) = \sum_{i=1}^{k} e^{-\beta E}$$

Can be written as a sum over all distinct energies with $\Omega(E)$ being the number of states with energy $E$. Known as **multiplicity**

$$Z(T) = \sum_{\text{Energies E}} \Omega(E)e^{-\beta E}$$

## Average Energy

$$\bar{E} = \sum_{i=1}^{k}P(i)E_i = \sum_{i=1}^{k} \frac{e^{-\beta E_i}}{Z} E_i = \frac{1}{Z}\sum_{i=1}^{k}E_i e^{\beta E_i}$$

Can also be written as:

$$\bar{E} = \sum_{E}^{k}P(E)E = \sum_{E} \frac{\Omega(E)e^{-\beta E}}{Z}E = \frac{1}{Z}\sum_{E}\Omega(E)e^{-\beta E}E$$ 

or 

$$\bar{E} = -\frac{1}{Z}\frac{\partial Z}{\partial \beta}|_{V,N} = -\frac{\partial (\ln{Z})}{\partial \beta}|_{V,N}$$$

where

$$Z = \sum_{\text{energies E}}\Omega(E)e^{-\beta E}$$


## Microcannonical VS cannonical approach

Hold at **constant** volume $V$ and number of particles $N$

### Microcannonical

- fix internal energy $U$
- find multiplicity $\Omega(U,V,N)$
- $S = k \ln{\Omega}$
- $T^{-1} = \frac{\partial S}{\partial U}|_{V,N}$

### Cannonical

- fix temperature $T$
- find partition function $Z(T,V,N)$
- $F = -kT\ln{Z}$
- $U = -\frac{\partial \ln{Z}}{\partial \beta}|_{V,N}$


## Partition function of N indistinquishable particles

$$Z_N = (Z_1)^N$$

### Dilute limit

A system is in the **dilute limit** if the number of thermodynamically accessible states is much, much larger than the number of particles. In this limit, the probability of any 2 particles being in the same state is negligibly small.

### Bosons vs Fermions

**Important note:** Bosons can share states whereas fermions cannot share states due to the **Pauli exclusion principal**.

## Gibbs factor

Thermodynamic identity for $U$ implies then,

$$\Delta U_R = T\Delta S_R - P\Delta V_R + \mu\Delta N_R$$

then assuming volume doesn't change, let $\Delta U_R = -E$ and $\Delta N_R = -N$

$$-E = T\Delta S_R  - \mu N$$

$$ \rightarrow \boxed{\Delta S_R = -\frac{E}{T} + \frac{\mu N}{T}}$$

The probability of this state, also known as the **Gibb's factor**, is proportional to

$$\boxed{P(N,E)\approx e^{\Delta S_R/k} = e^{-\beta(E-\mu N)}} $$


## Distributions

Knowing the distribution $n(E)$, one can calculate the **average number of particles in a system**

$$N = \sum_{\text{states }i} n(E_i)$$

and the **average internal energy of a system**

$$U = \sum_{\text{states }i} n(E_i)E_i$$

### Fermi-Dirac distribution

$$Z = 1 + e^{-\beta(\epsilon - \mu)}$$

Average number of particles in state of energy $\epsilon$:

$$\bar{n_{\text{FD}}} = \frac{1}{e^{\beta(\epsilon - \mu)} + 1}$$

### Bose-Einstein distribution

$$Z = \frac{1}{ 1 + e^{-\beta(\epsilon - \mu)}}$$

Average number of particles in state of energy $\epsilon$:


$$\bar{n_{\text{FD}}} = \frac{1}{e^{\beta(\epsilon - \mu)} - 1}$$

### Boltzman distribution

$$\bar{n}_{\text{boltzman}} = \frac{1}{e^{\beta(\epsilon - \mu)}} = e^{-\beta(\epsilon - \mu)}$$

## Density of states

Density of states, $g(E)$ is the number of 1-particle states per unit of energy.

$$g(E) = \frac{\Delta k}{\Delta E}$$

Number of states between 2 energies:

$$ \boxed{k(E_1,E_2) = \int_{E_1}^{E_2}dk = \int_{E_1}^{E_2}{g(E)} dE} $$

Knowing the **density of state** $g(E)$ and how many **particles occupy each state** $n(E)$ allow us to determine both the **total number of particles** in the system and what the **internal energy** of the system is.

$$\text{\# of particles: }N = \sum_{\text{states }i}n(E_i) = \int n(E)dk = \int n(E) g(E) dE$$

$$\text{internal energy: } U = \sum_{\text{states} i}E_in(E_i) = \int En(E)dk = \int En(E)g(E)dE$$

