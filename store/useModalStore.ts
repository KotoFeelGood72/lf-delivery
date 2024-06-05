import { defineStore } from 'pinia';

interface ModalsState {
  stories: boolean;
}

export const useModalStore = defineStore('modal', {
  state: (): { modals: ModalsState } => ({
    modals: {
      stories: false,
    },
  }),
  actions: {
    openModal(modalName: keyof ModalsState) {
      this.modals[modalName] = !this.modals[modalName];
    },
    closeModal(modalName: keyof ModalsState): void {
      this.modals[modalName] = false;
    },
  },
});


export const useModalStoreRefs = () => storeToRefs(useModalStore());
