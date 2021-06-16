import { checkIfSampleIsPositive } from '../../src/controllers/exams.controller'
import { examsMock } from '../../src/mocks/exams-mock';

describe('negative samples', () => {
  it('Cocaine negative', (done) => {
    const isPositive = checkIfSampleIsPositive(examsMock.negativeCocaineResult);
    expect(isPositive).toBe(false);
    done();
  });

  it('Amphetamine negative', (done) => {
    const isPositive = checkIfSampleIsPositive(examsMock.negativeAmphetamineResult);
    expect(isPositive).toBe(false);
    done();
  })

  it('MDA negative', (done) => {
    const isPositive = checkIfSampleIsPositive(examsMock.negativeMDAResult);
    expect(isPositive).toBe(false);
    done();
  })

  it('MDMAR negative', (done) => {
    const isPositive = checkIfSampleIsPositive(examsMock.negativeMDMARResult);
    expect(isPositive).toBe(false);
    done();
  })

  it('THC negative', (done) => {
    const isPositive = checkIfSampleIsPositive(examsMock.negativeTHCResult);
    expect(isPositive).toBe(false);
    done();
  })

  it('Morphine negative', (done) => {
    const isPositive = checkIfSampleIsPositive(examsMock.negativeMorphineResult);
    expect(isPositive).toBe(false);
    done();
  })


  it('Codeine negative', (done) => {
    const isPositive = checkIfSampleIsPositive(examsMock.negativeCodeineResult);
    expect(isPositive).toBe(false);
    done();
  })


  it('Heroin negative', (done) => {
    const isPositive = checkIfSampleIsPositive(examsMock.negativeHeroinResult);
    expect(isPositive).toBe(false);
    done();
  })
})

describe('positive samples', () => {
  it('Cocaine positive', (done) => {
    const isPositive = checkIfSampleIsPositive(examsMock.positiveCocaineResult);
    expect(isPositive).toBe(true);
    done();
  });

  it('Amphetamine positive', (done) => {
    const isPositive = checkIfSampleIsPositive(examsMock.positiveAmphetamineResult);
    expect(isPositive).toBe(true);
    done();
  })

  it('MDA positive', (done) => {
    const isPositive = checkIfSampleIsPositive(examsMock.positiveMDAResult);
    expect(isPositive).toBe(true);
    done();
  })

  it('MDMAR positive', (done) => {
    const isPositive = checkIfSampleIsPositive(examsMock.positiveMDMARResult);
    expect(isPositive).toBe(true);
    done();
  })

  it('THC positive', (done) => {
    const isPositive = checkIfSampleIsPositive(examsMock.positiveTHCResult);
    expect(isPositive).toBe(true);
    done();
  })

  it('Morphine positive', (done) => {
    const isPositive = checkIfSampleIsPositive(examsMock.positiveMorphineResult);
    expect(isPositive).toBe(true);
    done();
  })


  it('Codeine positive', (done) => {
    const isPositive = checkIfSampleIsPositive(examsMock.positiveCodeineResult);
    expect(isPositive).toBe(true);
    done();
  })


  it('Heroin positive', (done) => {
    const isPositive = checkIfSampleIsPositive(examsMock.positiveHeroinResult);
    expect(isPositive).toBe(true);
    done();
  })
})