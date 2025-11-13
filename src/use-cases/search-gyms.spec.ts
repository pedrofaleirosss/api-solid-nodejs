import { expect, describe, it, beforeEach } from "vitest";
import { SearchGymsUseCase } from "./search-gyms";
import { InMemoryGymsRepository } from "@/repositories/in-memory/in-memory-gyms-repository";

let gymsRepository: InMemoryGymsRepository;
let sut: SearchGymsUseCase;

describe("Search Gyms Use Case", () => {
  beforeEach(async () => {
    gymsRepository = new InMemoryGymsRepository();
    sut = new SearchGymsUseCase(gymsRepository);
  });

  it("should be able to search for gyms", async () => {
    await gymsRepository.create({
      id: "gym-01",
      title: "JavaScript Gym",
      description: null,
      phone: null,
      latitude: -23.55052,
      longitude: -46.633308,
    });

    await gymsRepository.create({
      id: "gym-02",
      title: "TypeScript Gym",
      description: null,
      phone: null,
      latitude: -23.55052,
      longitude: -46.633308,
    });

    const { gyms } = await sut.execute({ query: "JavaScript", page: 1 });

    expect(gyms).toHaveLength(1);
    expect(gyms).toEqual([
      expect.objectContaining({ title: "JavaScript Gym" }),
    ]);
  });

  it("should be able to fetch paginated gyms search", async () => {
    for (let i = 1; i <= 22; i++) {
      await gymsRepository.create({
        title: `JavaScript Gym ${i}`,
        description: null,
        phone: null,
        latitude: -23.55052,
        longitude: -46.633308,
      });
    }

    const { gyms } = await sut.execute({ query: "JavaScript", page: 2 });

    expect(gyms).toHaveLength(2);
    expect(gyms).toEqual([
      expect.objectContaining({ title: "JavaScript Gym 21" }),
      expect.objectContaining({ title: "JavaScript Gym 22" }),
    ]);
  });
});
