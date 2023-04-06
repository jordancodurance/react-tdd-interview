# React Pairing Exercise

This exercise should be completed as if you are pairing on a feature within a real business setting.

Don't be afraid to ask questions, and do communicate your thinking.

### Goal

Test-drive a component that can take in data, and render it as a table.

Use `./design.png` as a reference. You don't need to worry about styling to begin with.

`./src/data/userData.ts` contains example data that should be rendered.

## Solution

The following is a write-up based on the approach taken by myself (Jordan)

## Acceptance testing

As developers, we write (or should be writing) lots of tests. These tests are to check our assumptions about the code we 
developers care about. They also provide documentation for other developers working with us.

Acceptance tests are different from the tests developers write. They are written by the QA, and should not be written
by developers. If a project has a lack of QA, then a developer should accept this role (rotating amongst other developers).
Developers who do accept the role of QA should not also write the code they are testing. If you are the only or one of very few
developers on the project, then of course you are a special case, but you should still proceed with a Business/QA mindset.

These tests are also isolated to business domain concerns only. They should not be utilising developer dependencies. That means
no HTML, no databases (fake ones only), and no UI. Yes, the UI is a developer/designer concern. A business can operate fine without
a fancy UI. At the end of the day the business is just a compilation of rules, and the UI is a way for us humans to interact with those
rules more easily.

### Fitnesse

This project uses Fitnesse, a wiki web server used for hosting and writing acceptance tests in the FIT framework style.

Fitnesse can be launched by executing the standalone jar:

``java -jar acceptance/fitnesse/fitnesse-standalone.jar -d acceptance/fitnesse/FitNesseRoot``

You can now access the local wiki instance using a browser at ``http://localhost/``

### Writing tests

Using the Fitnesse interface, you can add: 
- Static pages - for detailed documentation
- Suites - for organising related test pages together
- Test pages - for showing documentation and fixtures related to your feature

For this project, a simple test page is enough.

## Acceptance Test Driven Development

You will find the first iteration of this solution was completed via ATDD. ATDD involves writing the acceptance tests 
first and writing the code to pass them in the fixture for the tests.

In a perfect scenario, the business stakeholder (most likely the product owner) and the QA pair together to write the 
acceptance tests. Fitnesse provides a nice interface for them to do so. From there, the developers will write fixtures 
that the acceptance tests will execute. The code in the fixtures will not be pretty, but that is ok. It is then up to 
the developers to take this code, and build a well-defined architecture from it.

An important note is that this solution calls for a table to be shown, based on the designs provided. Don't be confused by the 
use of a table in the acceptance tests. The FIT framework makes use of tables to check input/output based on business concerns.

As developers, we are hired to think differently. It is often an accepted approach to look at designs for UI and build your solution
from there. This approach isn't exactly wrong, but it also isn't exactly right. Taking this approach has high risks of you coupling
the business to the UI. The UI should instead be seen as a layer on top of the business rules.

Using this mindset, we instead focus on the business value first, rather than the UI. 